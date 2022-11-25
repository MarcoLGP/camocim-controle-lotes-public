import { Row } from "@nextui-org/react"
import { Dispatch, SetStateAction } from "react"
import { MdAddCircleOutline } from "react-icons/md"
import styles from "../../styles/Orders.module.css"

interface IModule {
    img: string,
    adjustImg?: boolean,
    index: number,
    title: string,
    className?: string,
    setVisibleModal: Dispatch<SetStateAction<boolean>>,
    quantity: string | number,
    finalized?: boolean,
    subtitle: string,
    subtitle2?: string,
    subtitle3?: string
}

export default function ModuleOrder({ img, title, subtitle, subtitle2, subtitle3, quantity, setVisibleModal, finalized, index, className }: IModule) {

    return (
        <div className={`column ${styles.order_list_container} ${className}`}>
            <img src={img} height={145} width={145} style={{ marginTop: title === "Jacu bird" && 7 }} className={styles.order_list_product_img} />
            <div className={styles.order_list_content} style={{ backgroundColor: title === "Moka" && "#FFDDDD" }} >
                <div className={styles.order_list_details_box + " column"}>
                    <span className={styles.order_list_product_font}>{title} 250g</span>
                    <Row justify="center" style={{ marginTop: 8 }} >
                        <span style={{ backgroundColor: title === "Moka" && "#FF7E7E" }} className={styles.order_list_lot_font} >{subtitle}</span>
                        {subtitle2 && <span style={{ backgroundColor: title === "Moka" && "#FF7E7E" }} className={styles.order_list_lot_font} >{subtitle2}</span>}
                        {subtitle3 && <span style={{ marginRight: 0 }} className={styles.order_list_lot_font} >{subtitle3}</span>}
                    </Row>
                </div>
                <span className={styles.order_list_quantity} >x{quantity}</span>
                <div className={styles.order_list_add_container} style={{ backgroundColor: title === "Moka" && "#FF7E7E" }}>
                    {finalized ? <span className={styles.order_list_icon}>{index}</span> :
                        <MdAddCircleOutline className={styles.order_list_icon} onClick={() => setVisibleModal(true)} cursor={"pointer"} size={32} />}
                </div>
            </div>
        </div>
    )

}