import type { Contact } from '../../App';

interface Props {
  contact: Contact;
  onEdit: (contact: Contact) => void;
  onDelete: () => void;
}

export default function ContactCard({
  contact,
  onEdit,
  onDelete,
}: Props) {
  return (
    <article className="contact-card">
      <div className="contact-info">
        <h3>
          {[contact.firstName, contact.lastName]
            .filter(Boolean)
            .join(' ')}
        </h3>

        {contact.email && <p>Email: {contact.email}</p>}

        <p>
          Телефон: +{contact.countryCode} {contact.phone}
        </p>
      </div>

      <div className="contact-actions">
        <button
          type="button"
          className="button button-edit"
          onClick={() => onEdit(contact)}
        >
          Редагувати
        </button>

        <button
          type="button"
          className="button button-delete"
          onClick={onDelete}
        >
          Видалити
        </button>
      </div>
    </article>
  );
}