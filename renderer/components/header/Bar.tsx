import { Row } from "@nextui-org/react"
import { VscChromeMinimize } from "react-icons/vsc"
import { IoClose } from "react-icons/io5"
import { ipcRenderer } from "electron"
import { useEffect } from "react"

export default function Bar({ children }) {

    function minimizeWindow() {
        ipcRenderer.send("minimize_window")
    }

    function closeWindow() {
        ipcRenderer.send("close_window")
    }

    return (
        <div className='column'>
            {children}
            <div className="drag-window" />
            <Row className={"window_bar_container"} align="center">
                <span onClick={() => minimizeWindow()}>
                    <VscChromeMinimize size={25} />
                </span>
                <span onClick={() => closeWindow()}>
                    <IoClose size={25} />
                </span>
            </Row>
        </div>

    )

}