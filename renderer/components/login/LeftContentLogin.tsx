import { Row } from "@nextui-org/react";
import Link from "next/link";
import FormLogin from "./FormLogin";
import styles from "../../styles/Login.module.css"
import ImgCamocim from "../general/ImgCamocim";

export default function LeftContentLogin() {

    return (
        <div className={'container_40_vw'}>
            <div className={styles.box_login}>
                <ImgCamocim />
                <h2 className={"title_forms"} style={{fontSize: "1.3em"}}>Controle de lotes</h2>
                <FormLogin styles={styles} />
                <Row align="center" justify="center" className={styles.lines_login_container}>
                    <div className={styles.line_login} />
                    <span>OU</span>
                    <div className={styles.line_login} />
                </Row>
                <Link href={"/signUp"}>
                    <button className={styles.sign_up_button_login}>Registre-se</button>
                </Link>
            </div>
        </div>
    )

}