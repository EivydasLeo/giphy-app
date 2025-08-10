import { useEffect } from "react";
import styles from "./App.module.scss";
import { GifCard } from "../GifCard/GifCard";
import { RefreshButton } from "../RefreshButton/RefreshButton";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { useLockedGifs } from "../../context/useLockedGifs";

export const App = () => {
    const { lockedGifs, toggleLock } = useLockedGifs();
    const { gifs, fetchGifs } = useFetchGifs();
    const heading = "Giphy";

    useEffect(() => {
        fetchGifs(lockedGifs);
    }, [fetchGifs]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "Space") {
                e.preventDefault();
                fetchGifs(lockedGifs);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [fetchGifs, lockedGifs]);

    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.heading}>{heading}</h1>
            </header>
            <main>
                <div className={styles.body}>
                    {gifs.map((gif) => (
                        <GifCard
                            key={gif.id}
                            gif={gif}
                            isLocked={lockedGifs.some((locked) => locked.id === gif.id)}
                            onToggleLock={() => toggleLock(gif)}
                        />
                    ))}
                </div>
            </main>
            <footer>
                <RefreshButton onClick={() => fetchGifs(lockedGifs)} className={styles.refresh} />
            </footer>
        </div>
    );
};
