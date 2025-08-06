import { useState, useCallback } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export function useFetchGifs() {
    const [gifs, setGifs] = useState([]);

    const fetchGifs = useCallback(async () => {
        const offset = Math.floor(Math.random() * 100);
        try {
            const res = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=leisure&limit=12&offset=${offset}`,
            );
            const data = await res.json();
            setGifs(data.data);
        } catch (err) {
            console.error("Nepavyko parsiųsti GIF'ų:", err);
        }
    }, []);

    return { gifs, fetchGifs };
}
