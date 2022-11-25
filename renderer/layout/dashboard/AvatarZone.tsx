import Image from "next/image"
import avatar_img from "../../public/images/Avatar.png"

export default function AvatarZone({styles}) {

    return (
     <div className={styles.avatar_zone_container}>
        <Image src={avatar_img} height={150} width={150} />
        <span className={styles.avatar_zone_name} >Irfan Ahsan</span>
        <span className={styles.avatar_zone_function}>Funcionário</span>
     </div>   
    )

}