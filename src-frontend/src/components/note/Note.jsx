import { Link } from 'react-router-dom';

import styles from './note.module.css'

function Note({author, text, id}) {

  return (
    <li className={styles.note}>
      <Link to={id} >
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{text}</p>
      </Link>
    </li>
  );
}

export default Note;