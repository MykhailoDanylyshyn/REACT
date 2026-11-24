interface Props {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  countryCodeError?: string;
  phoneError?: string;
}

export default function PhoneField({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  countryCodeError,
  phoneError,
}: Props) {
  const handleCountryCodeChange = (value: string) => {
    onCountryCodeChange(value.replace(/\D/g, '').slice(0, 3));
  };

  const handlePhoneChange = (value: string) => {
    onPhoneChange(value.replace(/\D/g, '').slice(0, 9));
  };

  return (
    <div className="field">
      <label htmlFor="phone">Номер телефону</label>

      <div className="phone-input">
        <span className="phone-plus">+</span>

        <input
          aria-label="Код країни"
          type="text"
          inputMode="numeric"
          value={countryCode}
          onChange={(event) =>
            handleCountryCodeChange(event.target.value)
          }
          placeholder="48"
          maxLength={3}
          className="country-code-input"
        />

        <input
          id="phone"
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={(event) => handlePhoneChange(event.target.value)}
          placeholder="123456789"
          maxLength={9}
          className="phone-number-input"
        />
      </div>

      {countryCodeError && (
        <p className="field-error">{countryCodeError}</p>
      )}

      {phoneError && (
        <p className="field-error">{phoneError}</p>
      )}

      <p className="field-hint">
        Код країни — 1–3 цифри, номер — 9 цифр.
      </p>
    </div>
  );
}