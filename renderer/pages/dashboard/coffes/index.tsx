import { ReactElement } from "react";
import CoffesContent from "../../../components/dashboard/coffes/CoffesContent";
import LayoutDashboard from "../../../layout/main/LayoutDashboard";
import { NextPageWithLayout } from "../../_app";

const Coffes: NextPageWithLayout = () => {

    return (
        <CoffesContent />
    )

}

Coffes.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}

export default Coffes