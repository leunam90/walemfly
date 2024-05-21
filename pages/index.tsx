// pages/index.tsx
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const handlePhotoClick = (photoSrc: string) => {
    setSelectedPhoto(photoSrc);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Head>
        <title>WalemFly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center px-6">
          <h1 className="text-2xl font-bold">WalemFly</h1>
        </div>
      </header>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-8">My Photo Portfolio</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Replace the following images with your own photos */}
            <img
              src="/img/DJI_0042.jpg"
              alt="Photo 1"
              className="rounded-lg cursor-pointer hover:opacity-80"
              onClick={() => handlePhotoClick('/img/DJI_0042.jpg')}
            />
            <img
              src="/img/DJI_0056.jpg"
              alt="Photo 2"
              className="rounded-lg cursor-pointer hover:opacity-80"
              onClick={() => handlePhotoClick('/img/DJI_0056.jpg')}
            />
            <img
              src="/img/DJI_0059.jpg"
              alt="Photo 3"
              className="rounded-lg cursor-pointer hover:opacity-80"
              onClick={() => handlePhotoClick('/img/DJI_0059.jpg')}
            />
            {/* Add more images as needed */}
          </div>
        </div>
      </main>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img src={selectedPhoto} alt="Enlarged Photo" className="max-w-full max-h-full" />
          <button
            className="absolute top-4 right-4 text-white text-lg bg-gray-800 rounded-full px-3 py-1 hover:bg-gray-600"
            onClick={handleClosePopup}
          >
            Close
          </button>
        </div>
      )}

      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; 2024 WalemFly</p>
      </footer>
    </div>
  );
}
