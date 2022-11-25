import FormSignUp from "./FormSignUp";
import styles from "../../styles/SignUp.module.css"
import ImgCamocim from "../general/ImgCamocim";

export default function RightContentSignUp() {

    return (
        <div className="container_40_vw">

            <div className={styles.box_sign_up}>
                <ImgCamocim />
                <h1 className="title_forms">Registro</h1>
                <FormSignUp styles={styles} />
            </div>

        </div>
    )

}