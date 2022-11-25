import { Row } from "@nextui-org/react";
import CoffeModule from "./CoffeModule";
import jacu_img from "../../../public/images/cafe-jacu.png"
import casa_sloper_img from "../../../public/images/casa-sloper.png"
import moka_img from "../../../public/images/moka.png"
import montanhas_img from "../../../public/images/montanhas.png"
import camocim_natural_img from "../../../public/images/camocim-natural.png"
import camocim_img from "../../../public/images/camocim.png"
import icatu_img from "../../../public/images/icatu.png"

export default function CoffesModules() {

    return (
        <>
            <Row justify="space-between">
                <CoffeModule name="Jacu Bird" warning color="orange" img={jacu_img.src} />
                <CoffeModule name="Casa Sloper" warning color="red" img={casa_sloper_img.src} right />
            </Row>
            <Row justify="space-between">
                <CoffeModule name="Moka" warning color="pink" img={moka_img.src} />
                <CoffeModule name="Montanhas" color="green" img={montanhas_img.src} right />
            </Row>
            <Row justify="space-between">
                <CoffeModule name="Camocim Natural" color="yellow" img={camocim_natural_img.src} />
                <CoffeModule name="Camocim" color="brown" img={camocim_img.src} right />
            </Row>
            <Row justify="center" style={{ paddingBottom: 15 }}>
                <CoffeModule name="Icatu" color="yellow" img={icatu_img.src} />
            </Row>
        </>
    )

}

