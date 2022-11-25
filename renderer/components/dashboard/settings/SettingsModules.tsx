import { Row } from "@nextui-org/react";
import SettingsModule from "./SettingsModule";
import edit_email from "../../../public/images/edit-email.svg"
import edit_photo from "../../../public/images/edit-photo.svg"
import edit_name from "../../../public/images/edit-name.svg"
import edit_password from "../../../public/images/edit-password.svg"
import admin_image from "../../../public/images/admin-image.svg"

export default function SettingsModules() {

    return (
        <div style={{ marginTop: 10 }}>

            <Row justify="space-between">
                <SettingsModule title="Foto" color={"#EF5350"} img={edit_photo} />
                <SettingsModule title="E-mail" color={"#3F51B5"} img={edit_email} right />
            </Row>

            <Row style={{ marginTop: 10 }} justify="space-between">
                <SettingsModule title="Nome" color="#5E35B1" img={edit_name} />
                <SettingsModule title="Senha" color="#00ACC1" img={edit_password} right />
            </Row>

            <div style={{ padding: 30, display: "flex", justifyContent: "center" }}>
                <SettingsModule title="Admin" subtitle2={"Gerar token"} subtitle3={"Remover funcionário"} color="#EF5350" img={admin_image} />
            </div>

        </div>
    )

}