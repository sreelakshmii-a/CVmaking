import React, { useState, useEffect } from 'react';

const SpeakToHire = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio('/welcome-message.mp3');

    const playAudio = () => {
      audio.play().catch((error) => console.error('Audio play blocked:', error));
      setIsPlaying(true);
    };

    playAudio();

    audio.onended = () => setIsPlaying(false);

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo circle with gradient */}
        <div className={`rounded-full p-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transform transition-transform duration-200 ${isPlaying ? 'scale-110' : 'scale-100'}`}>
          <div className="w-64 h-64 rounded-full bg-black flex items-center justify-center p-8">
            <img src="/logo.png" alt="Speak2Hire Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Text content */}
        <h1 className="text-white text-4xl font-bold mt-8 mb-4">SPEAK2HIRE</h1>

        {/* Start button */}
        <button
          className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity"
          onClick={() => alert('Start functionality goes here')}
        >
          Get Started
        </button>
      </div>

      {/* CSS for starry background */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        .stars-1, .stars-2, .stars-3 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 50px 50px;
          animation: twinkle 4s infinite;
        }

        .stars-2 {
          background-size: 100px 100px;
          animation-delay: -1s;
        }

        .stars-3 {
          background-size: 150px 150px;
          animation-delay: -2s;
        }
      `}</style>
    </div>
  );
};

export default SpeakToHire;
