import React, { useRef, useState } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Video Oynatıcı</h1>
      <video
        ref={videoRef}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        style={{ width: '100%', borderRadius: '8px' }} // Genişlik %100, köşeleri yuvarla
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button onClick={handlePause} style={{ color: 'orange', fontWeight: 'bold' }}>
          Duraklat
        </button>
        <div>{isPaused ? 'Duraklatıldı' : 'Oynatılıyor'}</div>
        <button onClick={handlePlay} style={{ color: 'blue', fontWeight: 'bold' }}>
          Oynat
        </button>
      </div>
    </div>
  );
}
