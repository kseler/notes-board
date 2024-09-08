import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../ui/Modal';

import styles from './note-details.module.css';

function NoteDetails() {
  const note = useLoaderData();

  return (
    <Modal>
      <main className={styles.details}>
        {!note ? (
          <>
            <h1>Could not find note</h1>
            <p>Unfortunately, the requested note could not be found.</p>
            <p>
              <Link to=".." className={styles.btn}>
                Okay
              </Link>
            </p>
          </>
        ) :(
          <>
            <p className={styles.author}>{note.author}</p>
            <p className={styles.text}>{note.text}</p>
          </>
        )}
      </main>
    </Modal>
    );
}

export default NoteDetails;

export async function loader({params}) {
  try {
    const res = await fetch(`http://localhost:8000/notes/${params.id}`);
    const data = await res.json();

    return data.note;
  } catch (error) {
    console.log(error);
  }
}