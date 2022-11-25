import { Row, Spacer } from "@nextui-org/react";
import ModuleProduction from "../../../general/ModuleProduction";
import order_ready_img from "../../../../public/images/order-ready.svg"
import { useState } from "react";
import OrderShipModal from "../../../../modals/OrderShipModal";

export default function FinalizedOrdersModules() {

    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <>
            {visibleModal && <OrderShipModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
            <Row justify="space-evenly" style={{ width: "102%", paddingBottom: 20 }}>
                <ModuleProduction finalized setVisibleModal={setVisibleModal} title="Casa do café" subtitle="502" date="5 dias atrás" img={order_ready_img.src} />
                <Spacer x={2.5} />
                <ModuleProduction finalized setVisibleModal={setVisibleModal} title="Casa do café" subtitle="503" date="8 dias atrás" img={order_ready_img.src} />
            </Row>
        </>
    )

}