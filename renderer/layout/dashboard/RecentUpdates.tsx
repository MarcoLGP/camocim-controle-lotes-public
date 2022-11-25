import { Row } from "@nextui-org/react"
import { VscBellDot } from "react-icons/vsc"
import { IoIosWarning, IoMdClose } from "react-icons/io"
import RectangleUpdate from "../../components/dashboard/inicio/RectangleUpdate"
import FlatList from "flatlist-react"
import { useDispatch, useSelector } from "react-redux"
import { setOpenModalWarningCoffesToRoast } from "../../redux/slices/ModalSlice"
import { RootState } from "../../redux/store"
import WarningCoffesToRoastModal from "../../modals/WarningCoffesToRoastModal"

export default function RecentUpdates({ styles }) {

    const dispatch = useDispatch()
    const { openModalWarningCoffesToRoast } = useSelector((state: RootState) => state.modal)

    interface updateProps {
        notification: string,
        funcionario: string,
        type: number
    }

    const data = [
        { notification: "Finalizou o pedido 504", funcionario: "Funcionario", type: 1 },
        { notification: "Manuf. o pedido 502", funcionario: "Funcionario", type: 0 }
    ]

    function handleUpdate({ notification, funcionario, type }: updateProps) {

        return (
            <Row align="center" className={`${styles.update_item_container} animation_slide_vertical`}>
                <RectangleUpdate styles={styles} type={type} />
                <div className={styles.update_item_info_container}>
                    <span className={styles.update_item_notification}>{notification}</span>
                    <span className={styles.update_item_collaborator}>{funcionario}</span>
                </div>
                <IoMdClose className={styles.update_item_remove_icon} size={20} />
            </Row>
        )
    }

    return (
        <>
            {openModalWarningCoffesToRoast && <WarningCoffesToRoastModal  /> }
            <div className={styles.recent_updates_container}>
                <Row justify="space-between" style={{ width: 250 }}>
                    <h2>Recente</h2>
                    <IoIosWarning onClick={() => dispatch(setOpenModalWarningCoffesToRoast(true))} size={33} className={styles.recent_updates_warning_icon} />
                    <VscBellDot className={styles.recent_updates_bell_icon} size={31} />
                </Row>
                <FlatList
                    list={data}
                    renderItem={handleUpdate}
                />
            </div>
        </>
    )

}