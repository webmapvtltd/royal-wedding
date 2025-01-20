import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center p-4 text-gold-300 bg-maroon-700 rounded-lg shadow-lg">
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      <button className="text-3xl" onClick={togglePlayPause}>
        {isPlaying ? (
          <FaPause />
        ) : (
          <FaPlay />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
