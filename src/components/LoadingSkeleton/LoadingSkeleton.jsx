import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./loadingskeleton.module.scss";

export const LoadingSkeleton = () => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Skeleton className={styles.image} />
                <div className={styles.lockIcon}>
                    <Skeleton width={20} height={20} />
                </div>
            </div>

            <div className={styles.date}>
                <Skeleton width={80} height={12} />
            </div>

            <div className={styles.tags}>
                <Skeleton width={70} height={16} />
                <Skeleton width={70} height={16} />
            </div>
        </div>
    );
};
