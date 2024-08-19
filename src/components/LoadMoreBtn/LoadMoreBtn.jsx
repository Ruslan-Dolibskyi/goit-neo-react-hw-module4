import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button type="button" className={styles.LoadMoreBtn} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
