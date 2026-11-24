interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FirstNameField({
  value,
  onChange,
  error,
}: Props) {
  return (
    <div className="field">
      <label htmlFor="firstName">Ім’я</label>

      <input
        id="firstName"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Введіть ім’я"
      />

      {error && <p className="field-error">{error}</p>}
    </div>
  );
}