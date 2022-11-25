import { Modal, Row } from "@nextui-org/react";
import { IoMdArrowBack } from "react-icons/io";
import Select, { MultiValue } from "react-select";
import makeAnimated from 'react-select/animated';
import { FormEvent, useState } from "react";
import { BsClipboardData } from "react-icons/bs";
import styles from "../styles/Modals.module.css"
import { ipcRenderer } from "electron";

interface optionsSelect {
    value: string,
    label: string
}

interface reportModalProps {
    openModal: boolean,
    setOpenModal: Function,
    name: string,
    color: string
}

const optionsPeriod = [
    { value: "today", label: "Hoje" },
    { value: "15days", label: "15 dias" },
    { value: "30days", label: "30 dias" },
    { value: 'specific', label: 'Específico' }
]

const optionsLot = [
    { value: "all", label: "Todos" },
    { value: "specific", label: "Específico" }
]

export default function ReportModal({ openModal, setOpenModal, name }: reportModalProps) {

    ipcRenderer.on("done", () => {
        setOpenModal(false)
    })

    const [periodValue, setPeriodValue] = useState<string>()
    const [lot, setLot] = useState<string>()
    const [coffes, setCoffes] = useState<Array<string>>([name])
    const [initialDate, setInitialDate] = useState<string>()
    const [finalDate, setFinalDate] = useState<string>()

    const coffe: Array<optionsSelect> = [{ value: name, label: name }]

    const optionsCoffe: Array<object> = [
        { value: name, label: name }
    ]
    const allCoffes = ["Jacu Bird", "Casa Sloper", "Moka", "Montanhas", "Camocim Natural", "Camocim", "Icatu"]

    allCoffes.forEach(coffe => {
        if (!coffe.includes(name)) {
            optionsCoffe.push({ value: coffe, label: coffe })
        }
    })

    const animatedComponents = makeAnimated();

    function onChangeCoffe(coffesValues: MultiValue<optionsSelect>) {
        const array = []
        coffesValues.forEach(coffe => {
            array.unshift(coffe.value)
        })
        setCoffes(array)
    }

    function onChangePeriod({ value }: optionsSelect) {
        setPeriodValue(value)
    }

    function onChangeLot({ value }: optionsSelect) {
        setLot(value)
    }

    function onValidForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        ipcRenderer.send("write-xlsx", { coffes: coffes })
    }

    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            css={{ height: 500 }}
            width={"600px"}
        >

            <Modal.Body>

                <div >
                    <Row align="center">
                        <div onClick={() => setOpenModal(false)} className={styles.back_modal_icon_container}>
                            <IoMdArrowBack size={28} />
                        </div>
                        <h1 className={styles.title_modal_report} >Relatório de lotes</h1>
                    </Row>
                    <div className={styles.title_divisor_modal_report} />
                </div>

                <form className={styles.form_modal_report_container} onSubmit={onValidForm}>

                    <Row justify="space-between">

                        <div className={styles.form_modal_report_sides}>

                            <div>
                                <label>Cafés</label>
                                <Select placeholder={"Cafés"} defaultValue={optionsCoffe[0]} isMulti components={animatedComponents} options={optionsCoffe} onChange={onChangeCoffe} className={styles.form_modal_report_select_coffes} />
                            </div>
                            <div>
                                <label>Lotes</label>
                                <Select placeholder={"Lote"} defaultValue={optionsLot[0]} components={animatedComponents} options={optionsLot} onChange={onChangeLot} className={styles.form_modal_report_select_coffes} />
                            </div>

                            {lot === "specific" && <div>
                                <label>Lotes específicos</label>
                                <Select isDisabled placeholder={"Lote específico"} isMulti components={animatedComponents} defaultValue={{ label: "Todos" }} onChange={onChangeCoffe} className={styles.form_modal_report_select_coffes} />
                            </div>}

                        </div>

                        <div className={styles.form_modal_report_sides}>

                            <div>
                                <label>Período</label>
                                <Select options={optionsPeriod} defaultValue={optionsPeriod[0]} onChange={onChangePeriod} className={styles.form_modal_report_select_period} />
                            </div>

                            {periodValue === "specific" &&

                                <>

                                    <div className="column">
                                        <label>Data inicial</label>
                                        <input type="date" onChange={e => setInitialDate(e.target.value)} />
                                    </div>

                                    <div className="column">
                                        <label>Data final</label>
                                        <input type="date" onChange={e => setFinalDate(e.target.value)} />
                                    </div>

                                </>

                            }

                        </div>
                    </Row>

                    <button className={styles.form_modal_report_btn_submit} type="submit">
                        <BsClipboardData style={{ marginRight: 5 }} size={22} />
                        <span>Gerar planilha</span>
                    </button>

                </form>

            </Modal.Body>

        </Modal>
    )

}