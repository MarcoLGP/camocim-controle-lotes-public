import { Image } from "@nextui-org/react"
import { HiOutlineArrowNarrowDown } from "react-icons/hi"
import styles from "../../../styles/Coffes.module.css"
import { useState } from 'react'
import { useRouter } from "next/router"
import ReportModal from "../../../modals/ReportModal"
import { IoIosWarning } from "react-icons/io"
import { useDispatch } from "react-redux"
import { setOpenModalWarningCoffesToRoast } from "../../../redux/slices/ModalSlice"

interface coffeModuleProps {
    name: string,
    warning?: boolean,
    img: string,
    right?: boolean,
    color: string
}

export default function CoffeModule({ name, img, color, right, warning }: coffeModuleProps) {

    const [visibleDetails, setVisibleDetails] = useState(false)
    const [hoverItemMenu1, setHoverItemMenu1] = useState(false)
    const [hoverItemMenu2, setHoverItemMenu2] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    return (
        <>
            {openModal && <ReportModal color={color} name={name} openModal={openModal} setOpenModal={setOpenModal} />}
            <div className={`${right ? "animation_slide_right" : "animation_slide_left"} ${styles.coffe_item_container}`} onMouseEnter={() => setVisibleDetails(true)} onMouseLeave={() => setVisibleDetails(false)}>
                <div className={styles.color_item_border_coffe} style={{ backgroundColor: color }} />
                <div className="column">
                    <div className={styles.coffe_item_name}>{name}</div>
                    <div className={styles.coffe_to_details_item}>
                        {!visibleDetails && <HiOutlineArrowNarrowDown size={22} />}
                    </div>
                    <div className={styles.coffe_details_menu} style={{ display: visibleDetails && "flex" }}>

                        <span onClick={() => setOpenModal(true)} style={{ color: hoverItemMenu1 && color }}
                            onMouseLeave={() => setHoverItemMenu1(false)}
                            onMouseEnter={() => setHoverItemMenu1(true)}>Relatório</span>

                        <span onClick={() => router.push("/dashboard/coffes/lot/" + name)} style={{ color: hoverItemMenu2 && color }}
                            onMouseLeave={() => setHoverItemMenu2(false)}
                            onMouseEnter={() => setHoverItemMenu2(true)}>Lotes</span>

                    </div>
                </div>
                <div className={styles.img_coffe_item_container}>
                    <Image loading="lazy" objectFit="contain" height={160} width={140} src={img} />
                </div>
                {warning && <IoIosWarning onClick={() => dispatch(setOpenModalWarningCoffesToRoast(true))} size={25} className={styles.coffe_item_warning_icon} />}
            </div>
        </>
    )

}
