import { useState, useCallback } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export function useFetchGifs() {
    const [gifs, setGifs] = useState([]);

    const fetchGifs = useCallback(async (lockedGifs = []) => {
        const offset = Math.floor(Math.random() * 100);

        try {
            const res = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=leisure&limit=24&offset=${offset}`,
            );
            const data = await res.json();

            const fresh = data.data.filter(
                (gif) => !lockedGifs.some((locked) => locked.id === gif.id),
            );

            const needed = 12 - lockedGifs.length;

            const sortedFresh = fresh
                .sort((a, b) => new Date(b.import_datetime) - new Date(a.import_datetime))
                .slice(0, needed);

            const combined = [...lockedGifs, ...sortedFresh];

            setGifs(combined);
        } catch (err) {
            console.error("Nepavyko parsiųsti GIF'ų:", err);
        }
    }, []);

    return { gifs, fetchGifs };
}
