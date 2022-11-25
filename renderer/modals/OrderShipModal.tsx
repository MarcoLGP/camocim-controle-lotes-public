import { Modal, Row } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg"
import InputForm from "../components/general/InputForm";
import styles from "../styles/Modals.module.css";
import { BsWhatsapp } from "react-icons/bs";

interface IOrderShipModal {
    visibleModal: boolean,
    setVisibleModal: Dispatch<SetStateAction<boolean>>
}

export default function OrderShipModal({ visibleModal, setVisibleModal }: IOrderShipModal) {

    const [click, setClick] = useState("braspress")

    return (
        <Modal
            open={visibleModal}
            width={"550px"}
            css={{ height: 280 }}
            onClose={() => setVisibleModal(false)}
        >
            <Modal.Body>
                <div className="column" style={{ alignItems: "center" }} >
                    <Row align="center" style={{ width: "100%" }}>
                        <div onClick={() => setVisibleModal(false)} className={styles.back_modal_icon_container}>
                            <IoMdArrowBack size={28} />
                        </div>
                        <h1 className={styles.title_modal_report}>Envio de rastreio</h1>
                    </Row>
                    <div className={styles.title_divisor_modal_report} />

                    <form className={styles.form_order_ship_modal + " column"} onSubmit={e => e.preventDefault()} >

                        <Row align="center" justify="center" className={styles.form_ships_options_container} >
                            <div style={{ backgroundColor: click === "braspress" && "#17C964" }} onClick={() => setClick("braspress")}>Braspress</div>
                            <div style={{ backgroundColor: click === "correios" && "#17C964" }} onClick={() => setClick("correios")}>Correios</div>
                            <div style={{ backgroundColor: click === "continental" && "#17C964" }} onClick={() => setClick("continental")}>Continental</div>
                            <div style={{ backgroundColor: click === "aguia_branca" && "#17C964" }} onClick={() => setClick("aguia_branca")} >Águia branca</div>
                            <div style={{ backgroundColor: click === "local" && "#17C964" }} onClick={() => setClick("local")} >Local</div>
                        </Row>

                        <Row align="center" justify={click === "local" ? "center" : "space-between"}>
                            <InputForm key={click === "local" && Math.random()} className={"animation_slide_left"} width={150} defaultValue={"(27) 99999-9999"} icon={<FaPhone size={16} color={"#fff"} />} />
                            {!(click === "local") && <InputForm className="animation_slide_right" width={150} autoFocus placeholder={click === "correios" && "Cód. rastreio" || "Nota fiscal"} icon={<CgFileDocument size={18} color={"#fff"} />} />}
                        </Row>

                        <button className={styles.form_ships_submit_btn}>
                            <Row align="center" >
                                <BsWhatsapp size={18} style={{ margin: 5 }} color={"#fff"} />
                                <span>Enviar rastreio</span>
                            </Row>
                        </button>

                    </form>

                </div>
            </Modal.Body>
        </Modal>
    )

}