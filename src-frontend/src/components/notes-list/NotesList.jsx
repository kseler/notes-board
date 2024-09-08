import Note from '../note/Note';

import styles from './notes-list.module.css'

function NotesList({notes}) {
  return (
    <>
      {notes.length > 0 ? (
        <ul className={styles.notes}>
          {notes?.map((note, index) => (
            <Note
              key={index}
              author={note.author}
              text={note.text}
              id={note.id}
            />
          ))}
        </ul>
      ) : (
        <div className={styles.message}>
          <h2>There are no notes yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default NotesList;