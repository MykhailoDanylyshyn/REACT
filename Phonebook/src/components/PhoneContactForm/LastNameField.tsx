interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LastNameField({
  value,
  onChange,
}: Props) {
  return (
    <div className="field">
      <label htmlFor="lastName">Прізвище</label>

      <input
        id="lastName"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Введіть прізвище"
      />
    </div>
  );
}