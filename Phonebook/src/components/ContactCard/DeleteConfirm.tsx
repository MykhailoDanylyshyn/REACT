import type { Contact } from '../../App';

interface Props {
  contact: Contact;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteConfirm({
  contact,
  onConfirm,
  onCancel,
}: Props) {
  const fullName = [contact.firstName, contact.lastName]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="delete-title">Видалити контакт?</h2>

        <p>
          Ви впевнені, що хочете видалити контакт
          {' '}
          <strong>{fullName}</strong>?
        </p>

        <div className="modal-actions">
          <button
            type="button"
            className="button button-delete"
            onClick={onConfirm}
          >
            Так, видалити
          </button>

          <button
            type="button"
            className="button button-secondary"
            onClick={onCancel}
          >
            Скасувати
          </button>
        </div>
      </div>
    </div>
  );
}