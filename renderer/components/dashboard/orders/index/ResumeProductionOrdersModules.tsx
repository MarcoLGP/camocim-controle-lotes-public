import { Row, Spacer } from "@nextui-org/react";
import order_production_img from "../../../../public/images/order-production.svg"
import ModuleProduction from "../../../general/ModuleProduction";

export default function ProductionOrdersModules() {

    return (
        <Row justify="space-evenly" style={{ width: "102%", paddingBottom: 10 }} >
            <ModuleProduction img={order_production_img.src} title={"Casa do café"} subtitle={"500"} date={"Hoje"} />
            <Spacer x={2.5} />
            <ModuleProduction img={order_production_img.src} title={"Casa do café"} subtitle={"501"} date={"2 dias atrás"} />
        </Row>
    )
}