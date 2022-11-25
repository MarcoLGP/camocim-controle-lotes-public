import { ReactElement } from "react";
import ProductionOrdersContent from "../../../components/dashboard/orders/production_orders/ProductionOrdersContent";
import LayoutDashboard from "../../../layout/main/LayoutDashboard";
import { NextPageWithLayout } from "../../_app";

const ProductionOrders: NextPageWithLayout = () => {

    return (
        <ProductionOrdersContent />
    )

}

ProductionOrders.getLayout = function getLayout(page: ReactElement) {

    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )

}

export default ProductionOrders