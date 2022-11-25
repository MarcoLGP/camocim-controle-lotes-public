import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { HiSearchCircle } from "react-icons/hi";
import InputForm from "../../../general/InputForm";
import ResumeFinalizedOrdersModules from "./ResumeFinalizedOrdersModules";

export default function FinalizedOrders({ styles }) {

    const [search, setSearch] = useState<string | boolean>("")
    const { push } = useRouter()

    return (
        <div className={styles.production_orders_container}>
            <Row align="center" justify="space-between">
                <Row>
                    <h2 className={styles.production_orders_title}>Pedidos finalizados</h2>
                    {search ?
                        <form style={{marginLeft: 10, width: 200}} className="animation_slide_left">
                            <InputForm autoFocus onBlur={() => setSearch(false)} icon={<HiSearchCircle size={22} color={"#fff"} />} />
                        </form> :
                        <HiSearchCircle className={`animation_slide_right ${styles.search_icon}`} size={25} color={'#555555'} onClick={() => setSearch(true)} />}
                </Row>
                <Row onClick={() => push("/dashboard/orders/finalized_orders")} className={styles.production_orders_view_more_container} align="center">
                    <span>Ver mais</span>
                    <AiOutlineRight size={20} />
                </Row>
            </Row>
            <ResumeFinalizedOrdersModules />
        </div>
    )

}