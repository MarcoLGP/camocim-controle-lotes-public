import { Progress, Row } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import adjust_img from "../../../public/images/adjust.svg"
import arrow_image from "../../../public/images/arrow-square-right.png"

export default function SettingsAdjust({ styles }) {

    const { push } = useRouter()

    return (
        <Row align="center" justify="space-between" style={{ marginTop: 15 }}>
            <div className={styles.left_module_home}>
                <Row>
                    <div className={styles.left_module_home_border} style={{ backgroundColor: "#83E1E5" }} />
                    <h2 className={styles.left_module_home_title}>Ajustes</h2>
                </Row>
                <Image className={styles.left_module_home_img} src={adjust_img} height={250} width={250} />
            </div>

            <div className={styles.right_module_home}>
                <Row justify="center" align="center">
                    <div className={`${styles.right_module_home_details} column`}>
                        <span>Detalhes nos</span>
                        <span>Ajustes</span>
                    </div>
                    <Image onClick={() => push("/dashboard/orders")} style={{ cursor: "pointer" }} src={arrow_image} objectFit="contain" height={50} width={50} />
                </Row>
                <Progress indeterminated shadow css={{ width: "80%", marginTop: 30 }} />
            </div>

        </Row>
    )

}