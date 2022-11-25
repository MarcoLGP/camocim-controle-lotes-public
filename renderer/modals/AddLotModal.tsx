import { Modal, Row, Spacer } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";
import { FaBoxes } from "react-icons/fa"
import { TbClipboardCheck } from "react-icons/tb";
import InputForm from "../components/general/InputForm";
import styles from "../styles/Modals.module.css"
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineRemoveCircle } from "react-icons/md";

interface orderDetailsModalProps {
    visibleModal: boolean,
    setVisibleModal: Dispatch<SetStateAction<boolean>>
}

export default function AddLotModal({ visibleModal, setVisibleModal }: orderDetailsModalProps) {

    const [lots, setLots] = useState(0)

    return (
        <Modal
            open={visibleModal}
            onClose={() => setVisibleModal(false)}
            width={"600px"}
        >
            <Modal.Body>
                <div className="column">
                    <Row align="center" style={{ width: "100%" }}>
                        <div onClick={() => setVisibleModal(false)} className={styles.back_modal_icon_container}>
                            <IoMdArrowBack size={28} />
                        </div>
                        <h1 className={styles.title_modal_report}>Adicionar lote</h1>
                    </Row>
                    <div className={styles.title_divisor_modal_report} />

                    <form className={styles.form_add_lot_modal}>

                        <Row justify="space-between" className="animation_slide_vertical">
                            <InputForm width={180} placeholder="PB-0000" label="Lote 1" icon={<HiOutlineClipboardDocumentList size={18} color={"#fff"} />} />
                            <InputForm width={180} placeholder="1" label="Quantidade lote 1" icon={<FaBoxes size={18} color={"#fff"} />} />
                        </Row>
                        {lots >= 1 && <Row justify="space-between" className="animation_slide_vertical" >
                            <InputForm width={180} placeholder="PB-1111" label="Lote 2" icon={<HiOutlineClipboardDocumentList size={18} color={"#fff"} />} />
                            <InputForm width={180} placeholder="1" label="Quantidade lote 2" icon={<FaBoxes size={18} color={"#fff"} />} />
                        </Row>}

                        {lots >= 2 && <Row justify="space-between" className="animation_slide_vertical">
                            <InputForm width={180} placeholder="PB-1111" label="Lote 3" icon={<HiOutlineClipboardDocumentList size={18} color={"#fff"} />} />
                            <InputForm width={180} placeholder="1" label="Quantidade lote 3" icon={<FaBoxes size={18} color={"#fff"} />} />
                        </Row>}

                        <Row justify="center">
                            {lots >= 1 && <MdOutlineRemoveCircle onClick={() => setLots(lots - 1)} className={styles.form_add_lot_icon} cursor={"pointer"} size={25} color={"gray"} />}
                            {(lots >= 0 && lots <= 1) && <AiFillPlusCircle onClick={() => setLots(lots + 1)} className={styles.form_add_lot_icon} cursor={"pointer"} size={25} color={"gray"} />}
                        </Row>

                        <button type="submit" className={styles.form_new_lot_btn}>
                            <TbClipboardCheck style={{ marginRight: 5 }} size={22} />
                            Confirmar lote
                        </button>
                    </form>
                </div>

            </Modal.Body>
        </Modal>
    )

}