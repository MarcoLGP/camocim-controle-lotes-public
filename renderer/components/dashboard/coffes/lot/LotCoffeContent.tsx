import { Row } from "@nextui-org/react"
import { useRouter } from "next/router"
import { IoArrowBackCircle } from "react-icons/io5"
import RecentLot from "./RecentLot"
import styles from "../../../../styles/Coffes.module.css"
import ActiveLotCoffe from "./ActiveLotCoffe"
import FinalizedLotCoffe from "./FinalizedLotCoffe"
import { CgFileDocument } from "react-icons/cg"

export default function LotCoffeContent() {

    const { query, back } = useRouter()

    return (
        <>
            <Row align="center">
                <IoArrowBackCircle onClick={() => back()} cursor={"pointer"} style={{ marginRight: 10, marginTop: 7 }} size={30} color="gray" />
                <div className="title_left_contents">
                    <CgFileDocument size={20} />
                    <span>Lotes {query.coffe}</span>
                </div>
            </Row>
            <span className="subtitle_left_contents">Visão geral dos lotes do café</span>
            <RecentLot coffe={query.coffe} styles={styles} />
            <ActiveLotCoffe styles={styles} />
            <FinalizedLotCoffe styles={styles} />
        </>
    )

}