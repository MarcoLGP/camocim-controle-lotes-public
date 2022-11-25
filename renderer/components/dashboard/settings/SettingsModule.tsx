import Image, { StaticImageData } from "next/image"
import styles from "../../../styles/Settings.module.css"
import { HiOutlineArrowNarrowDown } from "react-icons/hi"
import { useState } from "react"

interface settingsModuleProps {
    color: string,
    title: string,
    subtitle2?: string,
    subtitle3?: string,
    right?: boolean,
    img: StaticImageData
}

export default function SettingsModule({ color, img, title, subtitle2, subtitle3, right }: settingsModuleProps) {

    const [showSubtitle, setShowSubtitle] = useState(false)
    const [hoverSubtitle, setHoverSubtitle] = useState(false)
    const [hoverSubtitle2, setHoverSubtitle2] = useState(false)
    const [hoverSubtitle3, setHoverSubtitle3] = useState(false)

    return (
        <div className={`${right ? "animation_slide_right" : "animation_slide_left"} ${styles.settings_module_container}`} onMouseEnter={() => setShowSubtitle(true)} onMouseLeave={() => setShowSubtitle(false)}>
            <div className={styles.border_colored} style={{ backgroundColor: color }} />
            <div className={styles.title_subtitle_item_container}>
                <span className={styles.settings_item_title}>{title}</span>
                {showSubtitle ?
                    <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>

                        {(!subtitle2 || !subtitle3) && <span
                            onMouseEnter={() => setHoverSubtitle(true)}
                            onMouseLeave={() => setHoverSubtitle(false)}
                            style={{ color: hoverSubtitle && color }}
                            className={styles.settings_item_subtitle}>Alterar</span>}

                        {subtitle2 &&
                            <span
                                onMouseEnter={() => setHoverSubtitle2(true)}
                                onMouseLeave={() => setHoverSubtitle2(false)}
                                style={{ color: hoverSubtitle2 && color }}
                                className={styles.settings_item_subtitle2}>{subtitle2}</span>}

                        {subtitle3 &&
                            <span
                                onMouseEnter={() => setHoverSubtitle3(true)}
                                onMouseLeave={() => setHoverSubtitle3(false)}
                                style={{ color: hoverSubtitle3 && color }}
                                className={styles.settings_item_subtitle3}>{subtitle3}</span>}

                    </div> : <HiOutlineArrowNarrowDown size={20} />}
            </div>
            <div className={styles.settings_item_img}>
                <Image src={img} height={120} width={120} objectFit={"contain"} />
            </div>
        </div>
    )

}