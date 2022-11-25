import { ReactElement } from "react";
import SettingsContent from "../../components/dashboard/settings/SettingsContent";
import LayoutDashboard from "../../layout/main/LayoutDashboard";
import { NextPageWithLayout } from "../_app";

const Settings: NextPageWithLayout = () => {

    return (
        <SettingsContent />
    )

}

Settings.getLayout = function getLayout(page: ReactElement) {

    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )

}

export default Settings