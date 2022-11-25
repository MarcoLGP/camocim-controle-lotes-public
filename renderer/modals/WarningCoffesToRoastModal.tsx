import { Modal, Row, Spacer } from "@nextui-org/react"
import { useSelector, useDispatch } from "react-redux"
import { setOpenModalWarningCoffesToRoast } from "../redux/slices/ModalSlice"
import styles from "../styles/Modals.module.css"
import { RootState } from "../redux/store"
import { IoMdArrowBack } from "react-icons/io"
import WarningCoffesToRoastList from "../lists/WarningCoffesToRoastList"

export default function WarningCoffesToRoastModal() {

    const { openModalWarningCoffesToRoast } = useSelector((state: RootState) => state.modal)

    function exitModal() {
        dispatch(setOpenModalWarningCoffesToRoast(false))
    }

    const dispatch = useDispatch()

    return (
        <Modal
            width={"600px"}
            open={openModalWarningCoffesToRoast}
            onClose={() => exitModal()}
        >
            <Modal.Body>
                <div className="column" style={{ alignItems: "center" }} >
                    <Row align="center" style={{ width: "100%" }}>
                        <div onClick={() => exitModal()} className={styles.back_modal_icon_container}>
                            <IoMdArrowBack size={28} />
                        </div>
                        <h1 className={styles.title_modal_report}>Controle de torra de café</h1>
                    </Row>
                    <div className={styles.title_divisor_modal_report} />
                    <WarningCoffesToRoastList exitModal={exitModal} />
                </div>
            </Modal.Body>
        </Modal>

    )

}