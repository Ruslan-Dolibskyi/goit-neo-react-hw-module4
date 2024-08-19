import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';

const API_KEY = 'oYEfoTirTp5_6RqWl5nwsnH67EQCllVOzMaNpuLB_5c';
const BASE_URL = 'https://api.unsplash.com/search/photos';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY,
          },
        });
        setImages(prevImages => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError('Failed to fetch images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {modalImage && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
      <Toaster />
    </div>
  );
};

export default App;
