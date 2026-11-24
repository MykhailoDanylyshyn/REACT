import { useEffect, useState, type JSX } from "react";

export default function TimerHook(): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const startTimer = () => {
        if (seconds > 0) {
            setIsRunning(true);
        } else if (Number(input) > 0) {
            setSeconds(Number(input));
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
        setInput("");
    };

    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        return [
            hours.toString().padStart(2, "0"),
            minutes.toString().padStart(2, "0"),
            secs.toString().padStart(2, "0")
        ].join(":");
    };

    return (
        <div id="center">
            <input
                type="number"
                min="1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введіть секунди"
                disabled={isRunning}
            />

            <h1 className="counter">{formatTime(seconds)}</h1>

            <div className="buttons">
                <button onClick={startTimer} disabled={isRunning}>
                    Старт
                </button>

                <button onClick={stopTimer} disabled={!isRunning}>
                    Стоп
                </button>

                <button onClick={resetTimer}>
                    Скинути
                </button>
            </div>
        </div>
    );
}