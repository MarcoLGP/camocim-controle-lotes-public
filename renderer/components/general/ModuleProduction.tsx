import { Row } from "@nextui-org/react"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction } from "react"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { FaRegCheckCircle, FaTruck } from "react-icons/fa"
import styles from "../../styles/Orders.module.css"

interface IModule {
    img: string,
    title: string,
    finalized?: boolean
    date: string,
    setVisibleModal?: Dispatch<SetStateAction<boolean>>,
    subtitle: string,
}

export default function ModuleProduction({ img, title, subtitle, date, finalized, setVisibleModal }: IModule) {

    const { push } = useRouter()

    return (
        <div className={`column ${styles.order_list_container} animation_slide_left`} >
            <img src={img} height={115} width={115} style={{ marginTop: 7, marginLeft: 20 }} className={styles.order_list_product_img} />
            <div className={styles.order_list_content} style={{ width: 275, height: 170, backgroundColor: finalized && "#E4EFCD" }} >
                <div className={styles.order_list_details_box + " column"} style={{ marginTop: 38 }} >
                    <span className={styles.order_list_product_font}>{title}</span>
                    <Row align="center" justify="center" >
                        <span className={styles.order_list_lot_font} style={{ marginTop: 4, backgroundColor: finalized && "#ACC37A" }}>{subtitle}</span>
                        {finalized && <Row onClick={() => setVisibleModal(true)} justify="center" align="center" className={styles.order_list_ship_icon} >
                            <FaTruck size={17} />
                        </Row>}
                    </Row>
                </div>
                <span className={styles.order_list_quantity} style={{ marginTop: 120 }} >{date}</span>
                <div className={styles.order_list_add_container} style={{ backgroundColor: finalized && "#ACC37A" }} >
                    {finalized ? <AiOutlineInfoCircle onClick={() => push(`/dashboard/orders/${subtitle}`)} cursor={"pointer"} className={styles.order_list_icon} size={30} /> :
                        <FaRegCheckCircle onClick={() => push(`/dashboard/orders/${subtitle}`)} cursor={"pointer"} className={styles.order_list_icon} size={28} />}
                </div>
            </div>
        </div>
    )

}