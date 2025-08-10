import styles from "./refreshbutton.module.scss";

export const RefreshButton = ({ onClick, className = "" }) => {
    const text = "Hit here to refresh gifs or press space";

    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            <img src="../../../public/svg/refresh.svg" alt="refresh" /> {text}
        </button>
    );
};
