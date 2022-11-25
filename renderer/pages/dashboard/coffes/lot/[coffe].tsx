import { ReactElement } from "react";
import LotCoffeContent from "../../../../components/dashboard/coffes/lot/LotCoffeContent";
import LayoutDashboard from "../../../../layout/main/LayoutDashboard";
import { NextPageWithLayout } from "../../../_app";

const LotsCoffee: NextPageWithLayout = () => {

    return (
        <LotCoffeContent />
    )

}

LotsCoffee.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}

export default LotsCoffee