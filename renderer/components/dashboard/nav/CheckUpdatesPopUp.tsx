import { Progress } from "@nextui-org/react"
import { ipcRenderer } from "electron"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BsFillCheckCircleFill, BsInfoCircleFill } from "react-icons/bs"
import { IoIosCloseCircle } from "react-icons/io"

function handleDownloadProgress(setDownloadUpdate: Dispatch<SetStateAction<boolean>>, setStatusChanged: Dispatch<SetStateAction<{
    number: number;
    color: string;
    icon?: JSX.Element;
    status: string;
}>>) {

    const interval = setInterval(async () => {
        const res_update = await ipcRenderer.invoke("update-check")
        if (res_update === "Download finalizado") {
            setDownloadUpdate(false)
            setStatusChanged({ number: 4, color: "#17C964", icon: <BsFillCheckCircleFill size={19} color={"#17C964"} />, status: "Download finalizado" })
            setTimeout(async () => {
                await ipcRenderer.invoke("quit-and-install-update")
            }, 3000)
            clearInterval(interval)
        }
    }, 3000)
}

async function updateCheckStart() {
    await ipcRenderer.invoke("check-updates")
}

async function checkUpdate(setStatusChanged: Dispatch<SetStateAction<{
    number: number;
    color: string;
    icon?: JSX.Element;
    status: string;
}>>, setDownloadUpdate: Dispatch<SetStateAction<boolean>>) {
    await ipcRenderer.invoke("update-check").then(res_update => {
        switch (res_update) {
            case "Ocorreu um problema":
                setStatusChanged({ number: 1, color: "red", icon: <IoIosCloseCircle size={23} style={{ marginLeft: 5 }} color={"red"} />, status: res_update })
                setTimeout(async () => {
                    const current_version = await ipcRenderer.invoke("get-version-update")
                    setStatusChanged({ number: 5, color: "#0072F5", status: `Versão ${current_version}`, icon: <BsInfoCircleFill size={19} color={"#0072F5"} /> })
                }, 6000)
                break;
            case "Sistema atualizado":
                setStatusChanged({ number: 2, color: "#17C964", icon: <BsFillCheckCircleFill size={19} color={"#17C964"} />, status: res_update })
                setTimeout(async () => {
                    const current_version = await ipcRenderer.invoke("get-version-update")
                    setStatusChanged({ number: 5, color: "#0072F5", status: `Versão ${current_version}`, icon: <BsInfoCircleFill size={19} color={"#0072F5"} /> })
                }, 6000)
                break;
            case "Atualização disponível":
                setDownloadUpdate(true)
                setStatusChanged({ number: 3, color: "#0072F5", status: "Baixando atualização" })
                handleDownloadProgress(setDownloadUpdate, setStatusChanged)
                break;
            default:
                setStatusChanged({ number: 6, color: "red", status: "Sistema offline", icon: <BsInfoCircleFill size={19} color={"red"} /> })
                break;
        }
    })
}

export default function CheckUpdatesPopUp({ styles }) {

    const [statusChanged, setStatusChanged] = useState({ number: 0, color: "orange", icon: <BsInfoCircleFill size={19} color={"orange"} />, status: "Verificando atualizações" })
    const [downloadUpdate, setDownloadUpdate] = useState(false)

    useEffect(() => {
        updateCheckStart()
        setTimeout(() => {
            checkUpdate(setStatusChanged, setDownloadUpdate)
        }, 4000)
    }, [false])

    return (
        <div key={statusChanged.number} style={{ borderLeftColor: statusChanged.color, justifyContent: downloadUpdate && "center" }} className={`${styles.check_updates_pop_up_container} animation_slide_left ${downloadUpdate && "column"}`}>
            {!downloadUpdate && statusChanged.icon}
            <span>{statusChanged.status}</span>
            {downloadUpdate && <Progress css={{ width: "80%", marginTop: 5 }} size={"sm"} indeterminated shadow />}
        </div>
    )

}