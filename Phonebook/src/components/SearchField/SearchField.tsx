import { useState } from 'react';

interface Props {
  onSearchChange: (value: string) => void;
}

export default function SearchField({ onSearchChange }: Props) {
  const [search, setSearch] = useState('');

  const handleChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <div className="field search-field">
      <label htmlFor="search">Пошук контактів</label>

<input
  id="search"
  type="text"
  value={search}
  onChange={(event) => handleChange(event.target.value)}
  placeholder="Введіть ім'я, прізвище або телефон..."
/>
    </div>
  );
}