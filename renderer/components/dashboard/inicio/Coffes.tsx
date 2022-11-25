import { Progress, Row } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { HiArrowRightCircle } from "react-icons/hi2";
import arrow_image from "../../../public/images/arrow-square-right.png"
import jacu from "../../../public/images/cafe-jacu.png"
import casa_sloper from "../../../public/images/casa-sloper.png"
import montanhas from "../../../public/images/montanhas.png"
import camocim_natural from "../../../public/images/camocim-natural.png"
import camocim from "../../../public/images/camocim.png"
import moka from "../../../public/images/moka.png"
import icatu from "../../../public/images/icatu.png"
import { useRouter } from "next/router";

export default function Coffes({ styles }) {

    const [showIcon, setShowIcon] = useState("none")
    const [progresso, setProgresso] = useState(0)
    const [animationTrigger, setAnimationTrigger] = useState<number>()
    const router = useRouter()

    const coffes = [
        { img: moka, color: "pink", name: "Moka" },
        { img: casa_sloper, color: 'red', name: "Casa Sloper" },
        { img: montanhas, color: "green", name: "Montanhas" },
        { img: camocim, color: "brown", name: "Camocim" },
        { img: camocim_natural, color: "yellow", name: "Camocim Natural" },
        { img: jacu, color: "orange", name: "Jacu Bird" },
        { img: icatu, color: "yellow", name: "Icatu Amarelo" }
    ]

    function setProgress() {
        setAnimationTrigger(Math.random())

        if (progresso >= coffes.length -1) {
            setProgresso(0)
        } else {
            setProgresso(progresso + 1)
        }

    }

    return (
        <Row justify="space-between">
            <div className={styles.coffes_home_container} onMouseEnter={() => setShowIcon("block")} onMouseLeave={() => setShowIcon("none")}>
                <Row>
                    <div className={styles.color_coffe} style={{ backgroundColor: coffes[progresso].color }} />
                    <h2 className={styles.coffes_font}>Cafés</h2>
                    <div className={styles.coffe_img_container}>
                        <Image key={animationTrigger} className={styles.coffe_img} src={coffes[progresso].img} height={170} width={180} objectFit={"contain"} />
                    </div>
                    <HiArrowRightCircle onClick={() => setProgress()} size={25} display={showIcon} className={styles.next_coffee_icon} />
                </Row>
            </div>
            <div className={styles.coffe_analytics} >
                <Row style={{ width: "80%" }} justify={"center"}>
                    <div className={styles.coffe_analytics_content}>
                        <h2>Detalhes do café</h2>
                        <span>{coffes[progresso].name}</span>
                    </div>
                    <Image src={arrow_image} onClick={() => router.push('/dashboard/coffes')} height={60} style={{ cursor: "pointer" }} width={60} objectFit={"contain"} />
                </Row>
                <Progress indeterminated shadow css={{ width: "80%", marginTop: 30 }} status="success" color={"warning"} />
            </div>
        </Row>
    )

}