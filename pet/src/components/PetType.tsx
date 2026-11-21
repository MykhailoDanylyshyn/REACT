type Props = {
    type: string;
    onPrev: () => void;
    onNext: () => void;
};

export default function PetType({ type, onPrev, onNext }: Props) {
    return (
        <div className="pet-type">
            <button type="button" onClick={onPrev}>❮</button>
            <h2>{type}</h2>
            <button type="button" onClick={onNext}>❯</button>
        </div>
    );
}
