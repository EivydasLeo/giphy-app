import { useContext } from "react";
import { LockedGifsContext } from "./LockedGifsContext";

export const useLockedGifs = () => useContext(LockedGifsContext);
