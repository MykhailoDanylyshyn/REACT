interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function EmailField({
  value,
  onChange,
  error,
}: Props) {
  return (
    <div className="field">
      <label htmlFor="email">Електронна пошта</label>

      <input
        id="email"
        type="email"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="example@email.com"
      />

      {error && <p className="field-error">{error}</p>}
    </div>
  );
}