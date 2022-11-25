import { BiPackage } from "react-icons/bi";

interface rectangleUpdateProps {
    type: number,
    styles: any
}

interface renderIconProp {
    icon: JSX.Element
}

function RenderIcon({ icon }: renderIconProp) {
    return icon
}

export default function RectangleUpdate({ type, styles }: rectangleUpdateProps) {

    function HandleType() {

        let icon: JSX.Element
        let rectangleColor: string

        switch (type) {
            case 0:
                icon = <BiPackage color={"orange"} size={25} />
                rectangleColor = "rgb(243, 239, 186)"
                break;
            case 1:
                icon = <BiPackage size={25} color={'#1bb607'} />
                rectangleColor = "#c6f599"
                break;
        }

        return (
            <div className={styles.update_rectangle_item} style={{ background: rectangleColor }}>
                <RenderIcon icon={icon} />
            </div>
        )
    }

    return (

        <HandleType />

    )

}