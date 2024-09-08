import { useNavigate } from 'react-router-dom';

import styles from './modal.module.css';

function Modal({children}) {
  const navigate = useNavigate();

  function handleClose() {
    navigate('..');
  }

  return (
    <>
      <div className={styles.backdrop} onClick={handleClose}>
        <dialog open className={styles.modal} onClick={event => event.stopPropagation()}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal