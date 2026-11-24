import type { JSX } from "react";

type StopButtonProps = {
    onStop: () => void;
};

export function StopButton({ onStop }: StopButtonProps): JSX.Element {
    return (
        <button onClick={onStop}>
            Стоп
        </button>
    );
}