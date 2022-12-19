import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

const NowPlaying = () => {
  const location = useLocation();
  const genre = location.state.genre;
  const [currentTrack, setCurrentTrack] = useState(genre[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = currentTrack.src;

  }, [currentTrack]);

  const play = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  const nextTrack = () => {
    const currentIndex = genre.indexOf(currentTrack);
    const nextIndex = currentIndex === genre.length - 1 ? 0 : currentIndex + 1;
    setCurrentTrack(genre[nextIndex]);
  };

  const prevTrack = () => {
    const currentIndex = genre.indexOf(currentTrack);
    const prevIndex = currentIndex === 0 ? genre.length - 1 : currentIndex - 1;
    setCurrentTrack(genre[prevIndex]);
  };

  return (
    // <div>
    //   <h1>Now Playing</h1>
    //   <div>
    //     <button onClick={prevTrack}>Previous</button>
    //     <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    //     <button onClick={nextTrack}>Next</button>
    //   </div>
    //   <audio ref={audioRef} />
    // </div>
    <ReactAudioPlayer />
  );
};

export default NowPlaying;


