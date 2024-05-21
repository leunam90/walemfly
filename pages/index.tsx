// pages/index.tsx
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const photos = ['/img/DJI_0032.jpg', '/img/DJI_0042.jpg', '/img/DJI_0056.jpg', '/img/DJI_0059.jpg'];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <Head>
        <title>WalemFly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`fixed w-full top-0 left-0 z-50 bg-white text-gray-800 py-4 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-center px-6">
          <h1 className="text-2xl font-bold">WalemFly</h1>
        </div>
      </header>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="rounded-lg cursor-pointer hover:opacity-80"
                onClick={() => handlePhotoClick(index)}
              />
            ))}
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-lg bg-gray-800 rounded-full px-3 py-1 hover:bg-gray-600"
            onClick={handleClosePopup}
          >
            Cerrar
          </button>
          <button
            className="absolute left-4 text-white text-lg bg-gray-800 rounded-full px-3 py-1 hover:bg-gray-600"
            onClick={handlePrevPhoto}
          >
            Anterior
          </button>
          <img src={photos[selectedPhotoIndex]} alt="Enlarged Photo" className="max-w-full max-h-full" />
          <button
            className="absolute right-4 text-white text-lg bg-gray-800 rounded-full px-3 py-1 hover:bg-gray-600"
            onClick={handleNextPhoto}
          >
            Siguiente
          </button>
        </div>
      )}

      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; 2024 WalemFly</p>
      </footer>
    </div>
  );
}
