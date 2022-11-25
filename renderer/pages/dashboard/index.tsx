import { ReactElement } from "react";
import ContentHome from "../../components/dashboard/inicio/ContentHome";
import LayoutDashboard from "../../layout/main/LayoutDashboard";
import { NextPageWithLayout } from "../_app";

const Home: NextPageWithLayout = () => {

    return (
        <ContentHome />
    )

}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}

export default Home