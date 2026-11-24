import { useEffect, useState } from 'react';

import PhoneContactForm from './components/PhoneContactForm/PhoneContactForm';
import ContactCard from './components/ContactCard/ContactCard';
import DeleteConfirm from './components/ContactCard/DeleteConfirm';
import SearchField from './components/SearchField/SearchField';

import './App.css';

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
}

const STORAGE_KEY = 'phone-book-contacts';

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const [search, setSearch] = useState('');
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [deletingContact, setDeletingContact] = useState<Contact | null>(null);
  const [storageMessage, setStorageMessage] = useState('');

  // Фільтрація контактів при зміні пошуку або масиву контактів
useEffect(() => {
  const normalizedSearch = search.trim().toLowerCase();

  const filtered = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.countryCode} ${contact.phone}`
      .toLowerCase()
      .includes(normalizedSearch)
  );

  setFilteredContacts(filtered);
}, [search, contacts]);

  // Додавання нового контакту або збереження змін
  const handleSave = (contact: Contact) => {
    if (editingContact) {
      setContacts((prev) =>
        prev.map((item) =>
          item.id === contact.id ? contact : item
        )
      );
    } else {
      setContacts((prev) => [...prev, contact]);
    }

    setEditingContact(null);
  };

  // Початок редагування
  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
  };

  // Скасування редагування
  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  // Видалення контакту після підтвердження
  const handleDelete = () => {
    if (!deletingContact) return;

    setContacts((prev) =>
      prev.filter((item) => item.id !== deletingContact.id)
    );

    if (editingContact?.id === deletingContact.id) {
      setEditingContact(null);
    }

    setDeletingContact(null);
  };

  // Ручне збереження контактів у localStorage
  const handleSaveToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
      setStorageMessage('Контакти успішно збережено.');
    } catch {
      setStorageMessage('Не вдалося зберегти контакти.');
    }
  };

  // Завантаження контактів із localStorage
  const handleLoadFromStorage = () => {
    try {
      const savedContacts = localStorage.getItem(STORAGE_KEY);

      if (!savedContacts) {
        setStorageMessage('Збережених контактів не знайдено.');
        return;
      }

      const parsed: unknown = JSON.parse(savedContacts);

      if (
        !Array.isArray(parsed) ||
        !parsed.every(
          (contact) =>
            contact &&
            typeof contact.id === 'string' &&
            typeof contact.firstName === 'string' &&
            typeof contact.lastName === 'string' &&
            typeof contact.email === 'string' &&
            typeof contact.countryCode === 'string' &&
            typeof contact.phone === 'string'
        )
      ) {
        setStorageMessage('Збережені дані мають неправильний формат.');
        return;
      }

      setContacts(parsed as Contact[]);
      setEditingContact(null);
      setDeletingContact(null);
      setStorageMessage('Контакти успішно завантажено.');
    } catch {
      setStorageMessage('Не вдалося завантажити контакти.');
    }
  };

 return (
  <main className="app">
    <header className="app-header">
      <h1>Контакти</h1>
    </header>

    <div className="phone-book-container">
      <div className="toolbar">
        <SearchField onSearchChange={setSearch} />

        <div className="storage-controls">
          <button
            type="button"
            className="button button-save"
            onClick={handleSaveToStorage}
          >
            Save
          </button>

          <button
            type="button"
            className="button button-load"
            onClick={handleLoadFromStorage}
          >
            Load
          </button>
        </div>
      </div>

      {storageMessage && (
        <p className="storage-message" role="status">
          {storageMessage}
        </p>
      )}

      <div className="main-content">
        <section className="form-section">
          <PhoneContactForm
            editingContact={editingContact}
            onSave={handleSave}
            onCancel={handleCancelEdit}
          />
        </section>

        <section className="contacts-section">
          <h2>Список контактів ({filteredContacts.length})</h2>

          <div className="contacts-list">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onEdit={handleEdit}
                  onDelete={() => setDeletingContact(contact)}
                />
              ))
            ) : (
              <p className="empty-message">
                {search.trim()
                  ? 'Нічого не знайдено.'
                  : 'Пусто.'}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>

    {deletingContact && (
      <DeleteConfirm
        contact={deletingContact}
        onConfirm={handleDelete}
        onCancel={() => setDeletingContact(null)}
      />
    )}
  </main>
);
}