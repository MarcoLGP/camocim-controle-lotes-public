import DashboardNav from "../dashboard/Nav";
import RightContent from "../dashboard/RightContent";
import styles from "../../styles/Dashboard.module.css"
import { Row } from "@nextui-org/react";

export default function LayoutDashboard({ children }) {

    return (
        <Row className={styles.dashboard_container}>
            <DashboardNav styles={styles} />
            <section className={styles.dashboard_content_container}>
                <div className={styles.dashboard_content}>
                    <Row>
                        <div className={"left_contents_container"}>
                            <div className={"left_contents"}>
                                {children}
                            </div>
                        </div>
                        <RightContent styles={styles} />
                    </Row>
                </div>
            </section>
        </Row>
    )
}