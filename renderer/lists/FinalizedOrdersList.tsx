import { Row, Spacer } from "@nextui-org/react";
import { useSelector } from "react-redux"
import ModuleProduction from "../components/general/ModuleProduction";
import { RootState } from "../redux/store";
import order_finalized_img from "../public/images/order-ready.svg"
import { useState } from "react";
import OrderShipModal from "../modals/OrderShipModal";

export default function FinalizedOrdersList() {

    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <>
            {visibleModal && <OrderShipModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
            <Row justify="space-evenly" style={{ marginTop: 10, paddingBottom: 10 }}>
                <ModuleProduction finalized setVisibleModal={setVisibleModal} title="Casa do café" date="5 dias atrás" subtitle="502" img={order_finalized_img.src} />
                <Spacer x={2.5} />
                <ModuleProduction finalized setVisibleModal={setVisibleModal} title="Casa do café" date="8 dias atrás" subtitle="503" img={order_finalized_img.src} />
            </Row>
        </>

    )

}