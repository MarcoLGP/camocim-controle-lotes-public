import styles from "../../../../styles/Orders.module.css"
import FinalizedOrders from "./FinalizedOrders";
import ProductionOrders from "./ResumeProductionOrders";
import ResumeOrders from "./ResumeOrders";
import { BiPackage } from "react-icons/bi";
import { Spacer } from "@nextui-org/react";

export default function ContentOrders() {

    return (
        <>
            <div style={{ width: 130 }} className="title_left_contents">
                <BiPackage size={22} />
                <span>Pedidos</span>
            </div>
            <Spacer y={0.2} />
            <span className="subtitle_left_contents">Visão geral dos pedidos</span>
            <Spacer y={0.5} />
            <ResumeOrders styles={styles} />
            <ProductionOrders styles={styles} />
            <FinalizedOrders styles={styles} />
        </>
    )

}