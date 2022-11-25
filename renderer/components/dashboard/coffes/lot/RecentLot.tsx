import { Progress, Row } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import moka_img from "../../../../public/images/moka.png"
import arrow_img from "../../../../public/images/arrow-square-right.png"
import { useEffect, useState } from "react";
import NewLotModal from "../../../../modals/NewLotModal";
import jacu_img from "../../../../public/images/cafe-jacu.png"
import icatu_img from "../../../../public/images/icatu.png"
import camocim_img from "../../../../public/images/camocim.png"
import montanhas_img from "../../../../public/images/montanhas.png"
import camocim_natural_img from "../../../../public/images/camocim-natural.png"
import casa_sloper_img from "../../../../public/images/casa-sloper.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface IRecentLot {
    styles: any,
    coffe: string | string[]
}

export default function RecentLot({ styles, coffe }: IRecentLot) {

    const [visibleModal, setVisibleModal] = useState(false)
    const [img, setImg] = useState<StaticImageData>()

    useEffect(() => {
        switch (coffe) {
            case "Jacu Bird":
                setImg(jacu_img)
                break;
            case "Moka":
                setImg(moka_img)
                break;
            case "Icatu":
                setImg(icatu_img)
                break;
            case "Camocim":
                setImg(camocim_img)
                break;
            case "Montanhas":
                setImg(montanhas_img)
                break;
            case "Camocim Natural":
                setImg(camocim_natural_img)
                break;
            case "Casa Sloper":
                setImg(casa_sloper_img)
                break;
        }
    })

    return (
        <>
            {visibleModal && <NewLotModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
            <Row justify="space-between" className={styles.recent_lots_container}>
                <div className={styles.coffe_item_container}>
                    <div className={styles.color_item_border_coffe} style={{ backgroundColor: "orange" }} />
                    <div className="column" style={{ width: 120 }}>
                        <span className={styles.coffe_item_name} >PB-0598</span>
                        <button className={styles.new_lot_btn} onClick={() => setVisibleModal(true)} >Novo lote</button>
                    </div>
                    <Image src={img} height={150} width={140} objectFit={"contain"} />
                </div>
                <div className={styles.recent_lots_details_container}>
                    <Row align="center" justify="center" className={styles.recent_lots_details_content}>
                        <div className="column">
                            <span>Lote mais recente</span>
                            <span>PB-0598</span>
                        </div>
                        <div style={{ marginLeft: 10, marginTop: 12, cursor: "pointer" }}>
                            <Image src={arrow_img} height={55} width={60} objectFit={"contain"} />
                        </div>
                    </Row>
                    <div className={styles.recent_lots_progress}>
                        <Row align="center" justify="center" style={{ fontSize: 12 }}>
                            <span>100,000 KG</span>
                            <HiOutlineArrowNarrowRight size={18} style={{ margin: 5 }} />
                            <span>120,000 KG</span>
                        </Row>
                        <Progress color={"warning"} animated striped value={80} />
                    </div>

                </div>
            </Row>
        </>
    )

}