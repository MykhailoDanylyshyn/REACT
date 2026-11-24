import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

import type { Contact } from '../../App';

import FirstNameField from './FirstNameField';
import LastNameField from './LastNameField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';

interface Props {
  editingContact: Contact | null;
  onSave: (contact: Contact) => void;
  onCancel: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
}

export default function PhoneContactForm({
  editingContact,
  onSave,
  onCancel,
}: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('48');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});

  // Заповнення форми під час редагування
  useEffect(() => {
    if (editingContact) {
      setFirstName(editingContact.firstName);
      setLastName(editingContact.lastName);
      setEmail(editingContact.email);
      setCountryCode(editingContact.countryCode);
      setPhone(editingContact.phone);
    } else {
      resetForm();
    }

    setErrors({});
  }, [editingContact]);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCountryCode('48');
    setPhone('');
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!firstName.trim() && !lastName.trim()) {
      newErrors.name = 'Введіть ім’я або прізвище.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() && !emailRegex.test(email.trim())) {
      newErrors.email = 'Введіть коректну електронну адресу.';
    }

    if (!/^\d{1,3}$/.test(countryCode)) {
      newErrors.countryCode = 'Код країни має містити від 1 до 3 цифр.';
    }

    if (!/^\d{9}$/.test(phone)) {
      newErrors.phone = 'Номер телефону має містити 9 цифр.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    const contact: Contact = {
      id: editingContact?.id ?? crypto.randomUUID(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      countryCode,
      phone,
    };

    onSave(contact);
    resetForm();
  };

  const handleCancel = () => {
    resetForm();
    onCancel();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>
        {editingContact ? 'Редагування контакту' : 'Додати контакт'}
      </h2>

      <FirstNameField
        value={firstName}
        onChange={setFirstName}
        error={errors.name}
      />

      <LastNameField
        value={lastName}
        onChange={setLastName}
      />

      <EmailField
        value={email}
        onChange={setEmail}
        error={errors.email}
      />

      <PhoneField
        countryCode={countryCode}
        phone={phone}
        onCountryCodeChange={setCountryCode}
        onPhoneChange={setPhone}
        countryCodeError={errors.countryCode}
        phoneError={errors.phone}
      />

      <div className="form-buttons">
        <button type="submit" className="button button-primary">
          {editingContact ? 'Зберегти' : 'Додати контакт'}
        </button>

        {editingContact && (
          <button
            type="button"
            className="button button-secondary"
            onClick={handleCancel}
          >
            Скасувати
          </button>
        )}
      </div>
    </form>
  );
}