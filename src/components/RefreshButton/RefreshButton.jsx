import styles from "./RefreshButton.module.scss";
import refreshIcon from "../../assets/refresh.svg";

export const RefreshButton = ({ onClick, className = "" }) => {
    const text = "Hit here to refresh gifs or press space";

    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            <img src={refreshIcon} alt="refresh" /> {text}
        </button>
    );
};
