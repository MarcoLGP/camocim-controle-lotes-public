import { Row } from "@nextui-org/react";
import FlatList from "flatlist-react";
import Image from "next/image";
import { useRouter } from "next/router";
import jacu_img from "../public/images/cafe-jacu.png";
import casa_sloper_img from "../public/images/casa-sloper.png";
import moka_img from "../public/images/moka.png"
import styles from "../styles/Modals.module.css"

interface warningCoffesToRoastListProps {
    exitModal: Function
}

export default function WarningCoffesToRoastList({ exitModal }: warningCoffesToRoastListProps) {

    const { push } = useRouter()

    interface handleWarningCoffeProps {
        coffe: string,
        cafeDisponivel: number,
        cafeFaltando: number,
        img: string
    }

    function handleLotClick(coffe: string) {
        exitModal()
        push("/dashboard/coffes/lot/" + coffe)
    }

    const data = [
        { coffe: "Moka", cafeDisponivel: 20000, cafeFaltando: 3503, img: moka_img.src },
        { coffe: "Casa Sloper", cafeDisponivel: 20000, cafeFaltando: 3009, img: casa_sloper_img.src },
        { coffe: "Jacu Bird", cafeDisponivel: 20000, cafeFaltando: 2002, img: jacu_img.src }
    ]

    function handleWarningCoffe({ coffe, cafeDisponivel, cafeFaltando, img }: handleWarningCoffeProps) {

        return (
            <Row justify="center" style={{ paddingBottom: 20 }}>
                <div className={`${styles.warning_coffes_info_container} column`} >
                    <span>{coffe}</span>
                    <span>Disponível: {cafeDisponivel.toLocaleString().replace(".", ",")} KG</span>
                    <span>Em falta: {cafeFaltando.toLocaleString().replace(".", ",")} KG</span>
                    <span>Total de pedidos: 3</span>
                </div>
                <div className="column">
                    <div className={styles.warning_coffes_img_container}>
                        <Image src={img} height={120} width={120} objectFit={"contain"} />
                    </div>
                    <div className={styles.warning_coffes_img_bottom_border}>
                        <button onClick={() => handleLotClick(coffe)} >Lotes</button>
                    </div>
                </div>
            </Row>
        )
    }

    return (
        <FlatList
            list={data}
            wrapperHtmlTag={"div"}
            className={styles.warning_coffes_list_container}
            renderItem={handleWarningCoffe}
        />
    )
}