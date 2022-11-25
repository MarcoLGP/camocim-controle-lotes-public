import { Button, Row } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import order_production_img from "../../../../public/images/order-production.svg"
import order_ready_img from "../../../../public/images/order-ready.svg"
import arrow_img from "../../../../public/images/arrow-square-right.png"
import { HiArrowRightCircle } from "react-icons/hi2";
import { useRouter } from "next/router";

export default function ResumeOrders({ styles }) {

    const info = [
        {
            color: "orange",
            status: "Em produção",
            statusName: "produção",
            img: order_production_img
        },
        {
            color: "#17C964",
            status: "Finalizado",
            statusName: "finalizados",
            img: order_ready_img
        }
    ]
    const { push } = useRouter()
    const [infoNumber, setInfoNumber] = useState(0)
    const [hover, setHover] = useState(false)

    return (
        <Row justify="space-between">

            <div className={styles.resume_orders_container} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} >
                <div className={styles.resume_orders_border} style={{ backgroundColor: info[infoNumber].color }} />
                <span className={styles.resume_orders_status}>{info[infoNumber].status}</span>
                <div key={infoNumber} className={styles.resume_orders_img + " animation_slide_left"}>
                    <Image src={info[infoNumber].img} height={140} width={120} />
                </div>
                {hover && <HiArrowRightCircle className={styles.resume_orders_next_icon} onClick={() => infoNumber === 0 ? setInfoNumber(1) : setInfoNumber(0)} size={24} color={"gray"} />}
            </div>

            <div className={styles.details_orders_container}>
                <Row justify="space-evenly" align="center">
                    <div className={styles.details_orders_status_container}>
                        <span>Pedidos {infoNumber === 0 && "em"}</span>
                        <span>{info[infoNumber].statusName}</span>
                    </div>
                    <div className={styles.details_orders_arrow_img} onClick={() => infoNumber === 0 ? push("/dashboard/orders/production_orders") : push("/dashboard/orders/finalized_orders")} >
                        <Image src={arrow_img} height={60} width={60} />
                    </div>
                </Row>
                <Button color={"success"} css={{ marginTop: 10, color: "#fff", fontSize: 15, fontFamily: "Inter" }} >Baixar pedidos</Button>
            </div >
        </Row>

    )

}