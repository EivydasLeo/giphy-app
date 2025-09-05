import { useState, useCallback } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const GRID_SIZE = 12;
const API_FETCH_LIMIT = 24;
const MAX_OFFSET = 100;

export const useFetchGifs = () => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchGifs = useCallback(async (lockedGifs = []) => {
        setLoading(true);
        const offset = Math.floor(Math.random() * MAX_OFFSET);

        try {
            const res = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=leisure&limit=${API_FETCH_LIMIT}&offset=${offset}`,
            );
            const data = await res.json();

            const fresh = data.data.filter(
                (gif) => !lockedGifs.some((locked) => locked.id === gif.id),
            );

            const needed = GRID_SIZE - lockedGifs.length;

            const sortedFresh = fresh
                .sort((a, b) => new Date(b.import_datetime) - new Date(a.import_datetime))
                .slice(0, needed);

            const combined = [...lockedGifs, ...sortedFresh];

            setGifs(combined);
        } catch (err) {
            console.error("Nepavyko parsiųsti GIF'ų:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { gifs, fetchGifs, loading };
};
