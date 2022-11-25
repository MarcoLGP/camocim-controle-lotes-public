import { Row, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import { IoArrowBackCircle, IoSettingsOutline, IoStorefrontSharp } from "react-icons/io5";
import OrderList from "../../../../lists/OrderList";
import img_moka from "../../../../public/images/moka.png"
import img_jacu from "../../../../public/images/cafe-jacu.png"
import styles from "../../../../styles/Orders.module.css"
import { GoCalendar } from "react-icons/go"

export default function OrderContent() {

    const { back, query } = useRouter()

    const data = [
        { product: "Jacu bird", quantity: 3, g: 0.250, finalized: false, img: img_jacu },
        { product: "Moka", quantity: 3, g: 1000, finalized: false, img: img_moka },
    ]

    const finalized = query.order === "502" || query.order === "503"

    const dataRowded = data.reduce(function (rows, key, index) {
        return (index % 2 == 0 ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows;
    }, []);

    return (
        <>
            <Row align="center" className={styles.order_title_container}>
                <IoArrowBackCircle onClick={() => back()} cursor={"pointer"} style={{ marginRight: 9 }} size={30} color="gray" />
                <h2 className={styles.order_title}>Pedido {query.order}</h2>
                <span className={styles.order_date_font}> <GoCalendar size={20} style={{marginRight: 8}} /> {new Date().toLocaleDateString()}</span>
                <span className={styles.order_date_font} style={{ backgroundColor: "#14c561" }}>R$ 200,00</span>
            </Row>
            <Spacer y={0.2} />
            <Row align="center">
                <div className="subtitle_left_contents" style={{ display: "flex", alignItems: "center" }}>
                    <IoStorefrontSharp size={17} />
                    <span style={{ marginLeft: 5 }}>Casa do café</span>
                </div>
                <div className={styles.order_status_finalized}>
                    <IoSettingsOutline size={19} />
                </div>
            </Row>
            <OrderList finalized={finalized} order={dataRowded} />
        </>
    )

}