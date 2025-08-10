import { useState, useEffect, useCallback } from "react";
import { LockedGifsContext } from "./LockedGifsContext";

export const LockedGifsProvider = ({ children }) => {
    const [lockedGifs, setLockedGifs] = useState(() => {
        const saved = localStorage.getItem("lockedGifs");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("lockedGifs", JSON.stringify(lockedGifs));
    }, [lockedGifs]);

    const toggleLock = useCallback((gif) => {
        setLockedGifs((prev) =>
            prev.find((locked) => locked.id === gif.id)
                ? prev.filter((locked) => locked.id !== gif.id)
                : [...prev, gif],
        );
    }, []);

    return (
        <LockedGifsContext.Provider value={{ lockedGifs, toggleLock }}>
            {children}
        </LockedGifsContext.Provider>
    );
};
