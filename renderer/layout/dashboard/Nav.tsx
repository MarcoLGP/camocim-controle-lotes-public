import NavLinks from "../../components/dashboard/nav/NavLinks";
import { HiOutlineAdjustmentsHorizontal, HiOutlineSquares2X2, HiSquares2X2 } from "react-icons/hi2"
import { GiCoffeeBeans } from "react-icons/gi"
import { CiCoffeeBean } from "react-icons/ci"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import { IoExitOutline, IoGitPullRequest, IoGitPullRequestOutline } from "react-icons/io5"
import CheckUpdatesPopUp from "../../components/dashboard/nav/CheckUpdatesPopUp";

export default function DashboardNav({ styles }) {

    return (
        <div className={styles.dashboard_nav_container}>

            <div className={styles.img_logo_camocim} />

            <nav className={styles.dashboard_nav}>
                <ul>
                    <NavLinks name="Início" route="/dashboard" icon={<HiOutlineSquares2X2 size={23} />} iconSelected={<HiSquares2X2 size={23} />} />
                    <NavLinks name="Pedidos" route="/dashboard/orders" icon={<IoGitPullRequestOutline size={23} />} iconSelected={<IoGitPullRequest size={23} />} />
                    <NavLinks name="Cafés" route="/dashboard/coffes" icon={<CiCoffeeBean size={23} />} iconSelected={<GiCoffeeBeans size={23} />} />
                    <NavLinks name="Ajustes" route="/dashboard/settings" icon={<HiOutlineAdjustmentsHorizontal size={23} />} iconSelected={<TbAdjustmentsHorizontal size={23} />} />
                    <NavLinks name="Sair" route="/" icon={<IoExitOutline size={23} />} />
                </ul>
            </nav>

            <CheckUpdatesPopUp styles={styles} />

        </div>

    )
}