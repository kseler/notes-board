import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './main-header.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        Note Board
      </h1>
      <p>
        <Link to="/create-note" className={styles.button}>
          <MdPostAdd size={18} />
          New Note
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;