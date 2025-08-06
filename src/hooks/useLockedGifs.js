import { useState, useCallback } from "react";

export function useLockedGifs() {
    const [lockedIds, setLockedIds] = useState([]);

    const toggleLock = useCallback((id) => {
        setLockedIds((prev) =>
            prev.includes(id) ? prev.filter((lockedId) => lockedId !== id) : [...prev, id],
        );
    }, []);

    return { lockedIds, toggleLock };
}
