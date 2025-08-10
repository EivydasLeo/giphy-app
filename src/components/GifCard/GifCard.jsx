import styles from "./gifcard.module.scss";
import lock from "../../assets/lock.svg";

export const GifCard = ({ gif, isLocked, onToggleLock }) => {
    const date = gif.import_datetime?.split(" ")[0];
    const tags = gif.title?.trim()
        ? `#${gif.title.toLowerCase().trim().split(/\s+/).slice(0, 2).join(" #")}`
        : "#leisure #ba";

    return (
        <div className={styles.card} onClick={onToggleLock}>
            <img src={gif.images.fixed_height.url} className={styles.image} alt={gif.title} />
            {isLocked && <img src={lock} className={styles.lock} alt="lock" />}
            <div className={styles.meta}>
                <span className={styles.date}>{date}</span>
                <span className={styles.tags}>{tags}</span>
            </div>
        </div>
    );
};
