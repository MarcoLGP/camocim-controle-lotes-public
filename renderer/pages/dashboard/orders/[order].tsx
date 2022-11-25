import { ReactElement } from "react"
import OrderContent from "../../../components/dashboard/orders/order/OrderContent"
import LayoutDashboard from "../../../layout/main/LayoutDashboard"
import { NextPageWithLayout } from "../../_app"

const Order: NextPageWithLayout = () => {

    return (
        <OrderContent />
    )

}

Order.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}

export default Order