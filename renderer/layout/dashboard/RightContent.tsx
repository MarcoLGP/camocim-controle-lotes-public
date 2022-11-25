import AvatarZone from "./AvatarZone";
import RecentUpdates from "./RecentUpdates";

export default function RightContent({ styles }) {

    return (
        <div className={styles.right_content_home_container}>
            <AvatarZone styles={styles} />
            <div className={styles.avatar_zone_line_divisor} />
            <RecentUpdates styles={styles} />
        </div>
    )

}