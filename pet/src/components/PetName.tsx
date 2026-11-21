type Props = {
    name: string;
    setName: (name: string) => void;
};

export default function PetName({ name, setName }: Props) {
    return (
        <div className="pet-name">
            <label htmlFor="petName">Ім'я улюбленця</label>
            <input
                id="petName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введи ім'я..."
                required
            />
        </div>
    );
}
