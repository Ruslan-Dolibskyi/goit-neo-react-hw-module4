import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.ImageCard} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.Image}
      />
    </div>
  );
};

export default ImageCard;
