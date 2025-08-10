import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/main.scss";
import { App } from "./components/App/App";
import { LockedGifsProvider } from "./context/LockedGifsProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LockedGifsProvider>
            <App />
        </LockedGifsProvider>
    </StrictMode>,
);
