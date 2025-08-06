import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { GifCard } from "../GifCard/GifCard";
import RefreshButton from "../RefreshButton/RefreshButton";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export default function App() {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const res = await fetch(
                    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=leisure&limit=12`,
                );
                const data = await res.json();
                setGifs(data.data);
            } catch (error) {
                console.error("Klaida parsisiunčiant GIF'us:", error);
            }
        };

        fetchGifs();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.heading}>Giphy</h1>
                <div className={styles.body}>
                    {gifs.map((gif) => (
                        <GifCard key={gif.id} gif={gif} />
                    ))}
                </div>
                <RefreshButton className={styles.refresh} />
            </div>
        </>
    );
}
