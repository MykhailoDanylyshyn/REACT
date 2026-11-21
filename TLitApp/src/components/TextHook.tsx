import { useEffect, useState, type JSX } from "react";
import { transliterate } from "./transliteration";

export function TextHook(): JSX.Element {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    useEffect(() => {
        const result = transliterate(input);

        setOutput(result || "Введіть вище свій текст, щоб побачити результат");
    }, [input]);

    return (
        <div>
            <h2>Ваш текст</h2>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введіть свій текст"
            />
<h2>Результат</h2>
            <p> {output}</p>
        </div>
    );
}