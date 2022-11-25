import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiPackage } from "react-icons/bi";
import { HiSearchCircle } from "react-icons/hi";
import { IoArrowBackCircle } from "react-icons/io5";
import FinalizedOrdersList from "../../../../lists/FinalizedOrdersList";
import InputForm from "../../../general/InputForm";

export default function FinalizedOrdersContent() {

    const [search, setSearch] = useState<string | boolean>()
    const { back } = useRouter()

    return (
        <>
            <Row align="center" style={{ height: 58 }}>
                <IoArrowBackCircle onClick={() => back()} cursor={"pointer"} style={{ marginRight: 10, marginTop: 8 }} size={30} color="gray" />
                <div className="title_left_contents">
                    <BiPackage size={23} />
                    <span>Pedidos finalizados</span>
                </div>
            </Row>
            <Row>
                <span className="subtitle_left_contents">Visão detalhada dos pedidos finalizados</span>
                {search ?
                    <form className="animation_slide_left" style={{ marginLeft: 345, width: 200, position: "absolute", marginTop: 1 }}>
                        <InputForm icon={<HiSearchCircle size={22} color={"#fff"} />} autoFocus onBlur={() => setSearch(false)} />
                    </form> : <HiSearchCircle cursor={"pointer"} onClick={() => setSearch(true)} className={"animation_slide_right"} style={{ marginLeft: 5, marginTop: 7 }} size={25} color={'#555555'} />}
            </Row>
            <FinalizedOrdersList />
        </>


    )

}