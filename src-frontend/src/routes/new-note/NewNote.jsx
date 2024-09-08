import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../../components/ui/Modal';

import styles from './new-note.module.css';

function NewNote() {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="text">Text</label>
          <textarea
            name="text"
            id="text"
            rows={3}
            required
          />
        </p>

        <p>
          <label htmlFor="author">Your name</label>
          <input
            name="author"
            id="author"
            type="text"
            autoComplete="off"
            required
          />
        </p>

        <p className={styles.actions}>
          <Link to="/">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewNote;

export async function action({request}) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  try {
    await fetch('http://localhost:8000/notes', {
      method: 'POST',
      body: JSON.stringify(noteData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.log(error)
  }

  return redirect('/');
}