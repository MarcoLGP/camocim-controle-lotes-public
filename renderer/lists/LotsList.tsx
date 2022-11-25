import { Progress, Row } from "@nextui-org/react";
import FlatList from "flatlist-react";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdInfo } from "react-icons/md"
import LotDetailsModal from "../modals/LotDetailsModal";
import lot_image from "../public/images/lot.svg"

interface IdataLot {
    lot: string
}

export default function LotsList({ data, styles, finalized }) {

    const [visibleModal, setVisibleModal] = useState(false)
    const [dataLot, setDataLot] = useState<IdataLot>()

    function handleClickInfo(lot) {
        setDataLot({ lot })
        setVisibleModal(true)
    }

    function renderActiveLot(data) {

        return (
            <Row justify="space-between" style={{ width: "103%", paddingBottom: finalized && 15 }}>
                <div className={`animation_slide_left ${styles.list_lots_container}`}>
                    <div className={styles.color_item_border_coffe} style={{ backgroundColor: finalized ? "#17C964" : "orange" }} />
                    <div className="column">
                        <Row align="center">
                            <span className={styles.lot_item_name}>{data[0].lot}</span>
                            <MdInfo onClick={() => handleClickInfo(data[0].lot)} className={styles.lot_item_info_icon} size={23} />
                        </Row>

                        <Row style={{ marginTop: 10 }}>
                            <Image loading="lazy" src={lot_image} height={120} width={110} />
                            <div className={styles.list_lots_status_container}>
                                <Row align="center" justify="center" style={{ fontSize: 12 }}>
                                    {!finalized && <span>100,000 KG</span>}
                                    {!finalized && <HiOutlineArrowNarrowRight size={18} style={{ margin: 5 }} />}
                                    <span>120,000 KG</span>
                                </Row>
                                <Progress animated shadow striped color={finalized ? "success" : "warning"} value={data[0].progress} />
                            </div>
                        </Row>
                    </div>
                </div>

                {data[1] && <div className={`animation_slide_right ${styles.list_lots_container}`}>
                    <div className={styles.color_item_border_coffe} style={{ backgroundColor: finalized ? "#17C964" : "orange" }} />
                    <div className="column">
                        <Row align="center">
                            <span className={styles.lot_item_name}>{data[1].lot}</span>
                            <MdInfo onClick={() => handleClickInfo(data[1].lot)} className={styles.lot_item_info_icon} size={23} />
                        </Row>

                        <Row style={{ marginTop: 10 }}>
                            <Image loading="lazy" src={lot_image} height={120} width={110} />
                            <div className={styles.list_lots_status_container}>
                                <Row align="center" justify="center" style={{ fontSize: 12 }}>
                                    <span>110,000 KG</span>
                                    <HiOutlineArrowNarrowRight size={18} style={{ margin: 5 }} />
                                    <span>120,000 KG</span>
                                </Row>
                                <Progress animated shadow striped color={finalized ? "success" : "warning"} value={data[1].progress} />
                            </div>
                        </Row>
                    </div>
                </div>}

            </Row>
        )

    }

    return (
        <>
            {visibleModal && <LotDetailsModal finalized={finalized} data={dataLot} visibleModal={visibleModal} setVisibleModal={setVisibleModal} />}
            <FlatList
                list={data}
                renderItem={renderActiveLot}
            />
        </>

    )

}