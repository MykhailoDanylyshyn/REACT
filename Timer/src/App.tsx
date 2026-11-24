import Header from "./components/Header";
import TimerHook from "./components/TimerHook";

import "./App.css";

export default function App() {
    return (
        <div className="app">
            <Header title={"Timer"} />

            <main>
                <TimerHook/>
            </main>
        </div>
    );
}