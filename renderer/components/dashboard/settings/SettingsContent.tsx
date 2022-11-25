import { TbAdjustmentsHorizontal } from "react-icons/tb";
import SettingsModules from "./SettingsModules";

export default function SettingsContent() {

    return (
        <>
            <div className="title_left_contents" style={{ width: 120 }}>
                <TbAdjustmentsHorizontal size={20} />
                <span>Ajustes</span>
            </div>
            <span className="subtitle_left_contents">Visão detalhada dos ajustes </span>
            <SettingsModules />
        </>

    )

}