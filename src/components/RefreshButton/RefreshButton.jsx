import styles from "./RefreshButton.module.scss";
import Refresh from "../../assets/Refresh.svg";

const RefreshButton = ({ onClick, className = "" }) => {
    const text = "Hit here to refresh gifs or press space";

    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            <img src={Refresh} alt="refresh" /> {text}
        </button>
    );
};
export default RefreshButton;
