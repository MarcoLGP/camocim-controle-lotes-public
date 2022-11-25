import { Modal, Row } from "@nextui-org/react";
import { FaWeight } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoMdArrowBack } from "react-icons/io";
import { TbClipboardX } from "react-icons/tb";
import InputForm from "../components/general/InputForm";
import { BsCalendar2Date } from "react-icons/bs"
import styles from "../styles/Modals.module.css"
import { Dispatch, SetStateAction } from "react";

interface orderDetailsModalProps {
    visibleModal: boolean,
    setVisibleModal: Dispatch<SetStateAction<boolean>>,
    finalized?: boolean,
    data: {
        lot: string
    }
}

export default function LotDetailsModal({ visibleModal, setVisibleModal, data, finalized }: orderDetailsModalProps) {

    return (
        <Modal
            open={visibleModal}
            onClose={() => setVisibleModal(false)}
            width={"600px"}
        >
            <Modal.Body>
                <div className="column" style={{ paddingBottom: 15, color: finalized && "green" }}>
                    <Row align="center" style={{ width: "100%" }}>
                        <div onClick={() => setVisibleModal(false)} className={styles.back_modal_icon_container}>
                            <IoMdArrowBack size={28} />
                        </div>
                        <h1 className={styles.title_modal_report}>{data.lot}</h1>
                    </Row>
                    <div className={styles.title_divisor_modal_report} />
                    <Row className={styles.form_new_lot_container} justify={"space-between"}>
                        <div>
                            <InputForm readOnly placeholder="PG-0000" name="lot_green" label="Lote café cru" icon={<HiOutlineClipboardDocumentList size={18} color={"#fff"} />} />
                            <InputForm readOnly placeholder={data.lot} name="lot" label="Lote café torrado" icon={<HiOutlineClipboardDocumentList size={18} color={"#fff"} />} />
                        </div>
                        <div>
                            <InputForm readOnly placeholder="1,000 KG" name="lot_weight_green" label="Peso café cru" icon={<FaWeight size={18} color={"#fff"} />} />
                            <InputForm readOnly={true} placeholder="1,000 KG" name="lot_weight" label="Peso café torrado" icon={<FaWeight size={18} color={"#fff"} />} />
                        </div>
                    </Row>
                    <div style={{ width: 170 }}>
                        <InputForm label="Data da torra" icon={<BsCalendar2Date color="#fff" size={18} />} placeholder={"31/10/2022"} readOnly />
                    </div>
                    <button className={styles.form_lot_info_btn}>
                        <TbClipboardX style={{ marginRight: 5 }} size={22} />
                        <span>Excluir lote</span>
                    </button>
                </div>

            </Modal.Body>
        </Modal>
    )

}