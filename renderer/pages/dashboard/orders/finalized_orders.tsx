import { ReactElement } from "react";
import FinalizedOrdersContent from "../../../components/dashboard/orders/finalized_orders/FinalizedOrdersContent";
import LayoutDashboard from "../../../layout/main/LayoutDashboard";
import { NextPageWithLayout } from "../../_app";

const FinalizedOrders: NextPageWithLayout = () => {

    return (
        <FinalizedOrdersContent />
    )

}

FinalizedOrders.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}

export default FinalizedOrders