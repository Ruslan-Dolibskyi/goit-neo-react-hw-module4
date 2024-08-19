import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={styles.Modal}
    overlayClassName={styles.Overlay}
  >
    <img src={image.urls.regular} alt={image.alt_description} />
  </Modal>
);

export default ImageModal;
