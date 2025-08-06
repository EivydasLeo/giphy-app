import { useEffect } from "react";
import styles from "./App.module.scss";
import { GifCard } from "../GifCard/GifCard";
import RefreshButton from "../RefreshButton/RefreshButton";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { useLockedGifs } from "../../hooks/useLockedGifs";

export default function App() {
    const { gifs, fetchGifs } = useFetchGifs();
    const { lockedIds, toggleLock } = useLockedGifs();

    useEffect(() => {
        fetchGifs();
    }, [fetchGifs]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "Space") {
                console.log("clicked");
                e.preventDefault();
                fetchGifs();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [fetchGifs]);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.heading}>Giphy</h1>
                <div className={styles.body}>
                    {gifs.map((gif) => (
                        <GifCard
                            key={gif.id}
                            gif={gif}
                            isLocked={lockedIds.includes(gif.id)}
                            onToggleLock={() => toggleLock(gif.id)}
                        />
                    ))}
                </div>
                <RefreshButton onClick={fetchGifs} className={styles.refresh} />
            </div>
        </>
    );
}
