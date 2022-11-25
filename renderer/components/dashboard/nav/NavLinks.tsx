import Link from "next/link"
import { useRouter } from "next/router"
import { MouseEventHandler } from "react"
import styles from "../../../styles/Dashboard.module.css"

interface navLinksProps {
    name: string,
    route: string,
    icon: JSX.Element,
    iconSelected?: JSX.Element,
    onClick?: MouseEventHandler<HTMLLIElement>
}

export default function NavLinks({ name, icon, iconSelected, route, onClick }: navLinksProps) {

    const { asPath } = useRouter()
    let selected = false

    if (asPath === route) selected = true

    return (
        <Link href={route}>
            <li onClick={onClick} className={selected ?  styles.nav_item_selected : styles.nav_item}>
                { selected ? iconSelected : icon}
                <span>{name}</span>
            </li>
        </Link>
    )

}