import React, { useState, useEffect, createRef } from "react";
import { useLocation } from "react-router-dom";

const NowPlaying = () => {
  const location = useLocation();
  const genre = location.state.genre;
  const [currentTrack, setCurrentTrack] = useState(genre[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = createRef();

  useEffect(() => {
    audioRef.current.src = currentTrack.src;
  }, [currentTrack]);

  console.log(currentTrack.src);

  const play = () => {
    if (audioRef.current.play() !== undefined) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const pause = () => {
    setIsPlaying(false);
    audioRef.pause();
  };

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  const nextTrack = () => {
    const currentIndex = genre.indexOf(currentTrack);
    const nextIndex = currentIndex === genre.length - 1 ? 0 : currentIndex + 1;
    setCurrentTrack(genre[nextIndex]);
    console.log(currentTrack);
  };

  const prevTrack = () => {
    const currentIndex = genre.indexOf(currentTrack);
    const prevIndex = currentIndex === 0 ? genre.length - 1 : currentIndex - 1;
    setCurrentTrack(genre[prevIndex]);
    console.log(currentTrack);
  };

  return (
    <>
      <h1>Now Playing</h1>
      <div>
        <button onClick={prevTrack}>Previous</button>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={nextTrack}>Next</button>
      </div>
      <audio ref={audioRef} />
    </>
  );
};

export default NowPlaying;
