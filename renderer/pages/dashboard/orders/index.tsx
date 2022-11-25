import { ReactElement } from "react";
import ContentOrders from "../../../components/dashboard/orders/index/ContentOrders";
import LayoutDashboard from "../../../layout/main/LayoutDashboard";
import { NextPageWithLayout } from "../../_app";

const Orders: NextPageWithLayout = () => {

    return (
        <ContentOrders />
    )

}

Orders.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}

export default Orders