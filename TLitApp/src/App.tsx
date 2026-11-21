import { TextHook } from "./components/TextHook";
import "./App.css";

export function App() {
    return (
        <div className="app">
            <h1>RealTime транслітерація з-за допомогою React + Vite + TypeScript</h1>
            <TextHook />
        </div>
    );
}