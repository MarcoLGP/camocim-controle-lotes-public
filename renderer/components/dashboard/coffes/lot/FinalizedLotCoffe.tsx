import { Row } from "@nextui-org/react";
import { useState } from "react";
import { HiSearchCircle } from "react-icons/hi";
import LotsList from "../../../../lists/LotsList";
import InputForm from "../../../general/InputForm";

export default function FinalizedLotCoffe({ styles }) {

    const [search, setSearch] = useState<string | boolean>(false)

    const data = [
        [
            {
                lot: "PB-9865", progress: 100
            }
        ]
    ]

    return (
        <div className={styles.active_lots_container}>
            <Row align="center">
                <h2 className={styles.title_lots}>Lotes finalizados</h2>
                {search ?
                    <form className="form_search_inputs animation_slide_left">
                        <InputForm autoFocus onBlur={() => setSearch(false)} icon={<HiSearchCircle size={22} color={"#fff"} />} />
                    </form> :
                    <HiSearchCircle className={`animation_slide_right ${styles.icon_search_titles}`} size={25} color={'#555555'} onClick={() => setSearch(true)} />}
            </Row>
            <LotsList finalized styles={styles} data={data} />
        </div>
    )

}