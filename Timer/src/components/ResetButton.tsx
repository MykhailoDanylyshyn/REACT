import type { JSX } from "react";

type ResetButtonProps = {
    onReset: () => void;
};

export function ResetButton({ onReset }: ResetButtonProps): JSX.Element {
    return (
        <button onClick={onReset}>
            Скинути
        </button>
    );
}
