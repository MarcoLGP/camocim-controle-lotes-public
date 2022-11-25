import Coffes from "./Coffes";
import OrdersResume from "./OrdersResume";
import styles from "../../../styles/Home.module.css"
import SettingsAdjust from "./SettingsAdjust";
import { HiSquares2X2 } from "react-icons/hi2";

export default function ContentHome() {

    return (
        <div style={{ paddingBottom: 25 }}>
            <div className="title_left_contents" style={{ width: 120 }}>
                <HiSquares2X2 size={20} />
                <span>Início</span>
            </div>
            <span className="subtitle_left_contents">Visão geral do ecossistema</span>
            <Coffes styles={styles} />
            <OrdersResume styles={styles} />
            <SettingsAdjust styles={styles} />
        </div>
    )

}