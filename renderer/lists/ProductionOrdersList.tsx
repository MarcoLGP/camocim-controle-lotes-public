import { Row, Spacer } from "@nextui-org/react";
import ModuleProduction from "../components/general/ModuleProduction";
import order_production_img from "../public/images/order-production.svg"

export default function ProductionOrdersList() {

    return (
        <div style={{ marginTop: 10, paddingBottom: 10 }}>
            <Row justify="space-evenly" >
                <ModuleProduction title="Casa do café" date="Hoje" subtitle="500" img={order_production_img.src} />
                <Spacer x={2.5} />
                <ModuleProduction title="Casa do café" date="2 dias atrás" subtitle="501" img={order_production_img.src} />
            </Row>
        </div>
    )

}