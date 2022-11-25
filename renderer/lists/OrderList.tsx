import { Button, Row } from "@nextui-org/react"
import { StaticImageData } from "next/image"
import { useState } from "react"
import styles from "../styles/Orders.module.css"
import AddLotModal from "../modals/AddLotModal"
import FlatList from "flatlist-react"
import Module from "../components/general/ModuleOrder"

interface orderListProps {
    product: string,
    finalized: boolean,
    img: StaticImageData,
    quantity: number,
    g: number
}

interface orderList {
    order: Array<orderListProps>,
    finalized: boolean
}

export default function OrderList({ order, finalized }: orderList) {

    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    function handleOrder(value: orderListProps, index) {

        return (
            <Row justify="space-between">
                <Module className="animation_slide_left" index={index + 1} finalized={finalized} img={value[0].img.src} title={value[0].product} quantity={value[0].quantity} subtitle={"PB-0000"} setVisibleModal={setVisibleModal} />
                {value[1] && <Module className="animation_slide_right" index={index + 2} finalized={finalized} img={value[1].img.src} title={value[1].product} quantity={"2"} subtitle={"PB-0000"} setVisibleModal={setVisibleModal} subtitle2={"PB-1111"} />}
            </Row>
        )
    }

    return (
        <div style={{ paddingBottom: 15, marginTop: 10 }}>
            {visibleModal && <AddLotModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
            <FlatList
                list={order}
                wrapperHtmlTag="div"
                style={{ marginTop: 10 }}
                renderItem={handleOrder}
            />
            {!finalized && <Button css={{ marginTop: 30, fontFamily: "Inter", fontSize: 15 }} className={styles.order_module_finalizate_btn} color={"success"}>Finalizar pedido</Button>}
        </div>
    )

}