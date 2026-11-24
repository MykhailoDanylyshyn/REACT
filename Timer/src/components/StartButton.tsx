import type { JSX } from "react";

type StartButtonProps = {
    onStart: () => void;
};

export function StartButton({ onStart }: StartButtonProps): JSX.Element {
    return (
        <button onClick={onStart}>
            Старт
        </button>
    );
}