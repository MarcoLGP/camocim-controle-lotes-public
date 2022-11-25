import { Spacer } from "@nextui-org/react"
import { GiCoffeeBeans } from "react-icons/gi"
import CoffesModules from "./CoffesModules"

export default function CoffesContent() {

    return (
        <>
            <div className="title_left_contents" style={{width: 110}}>
                <GiCoffeeBeans size={18} />
                <span>Cafés</span>
            </div>
            <Spacer y={0.2} />
            <span className="subtitle_left_contents">Visão detalhada dos cafés </span>
            <CoffesModules />
        </>
    )
}