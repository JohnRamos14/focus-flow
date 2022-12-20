// import React, { useState, useEffect, createRef } from "react";
import React from "react";
import { useLocation } from "react-router-dom";
import audio from "./hiphop01.mp3";
import Art from "./testArt.jpg";
// import MusicControls from "./MusicControls";
import {ReactComponent as Play} from './assets/play.svg';
import { ReactComponent as Prev } from './assets/prev.svg';
import { ReactComponent as Next } from "./assets/next.svg";

const NowPlaying = () => {
  const location = useLocation();
  const genre = location.state.genre;
  console.log(genre);
  //   const [currentTrack, setCurrentTrack] = useState(genre[0]);
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   const audioRef = createRef();

  //   useEffect(() => {
  //     audioRef.current.src = currentTrack.src;
  //   }, [currentTrack]);

  //   console.log(currentTrack.src);

  //   const play = () => {
  //     if (audioRef.current.play() !== undefined) {
  //       audioRef.current
  //         .play()
  //         .then(() => {
  //           setIsPlaying(true);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   };

  //   const pause = () => {
  //     setIsPlaying(false);
  //     audioRef.pause();
  //   };

  //   const togglePlay = () => {
  //     isPlaying ? pause() : play();
  //   };

  //   const nextTrack = () => {
  //     const currentIndex = genre.indexOf(currentTrack);
  //     const nextIndex = currentIndex === genre.length - 1 ? 0 : currentIndex + 1;
  //     setCurrentTrack(genre[nextIndex]);
  //     console.log(currentTrack);
  //   };

  //   const prevTrack = () => {
  //     const currentIndex = genre.indexOf(currentTrack);
  //     const prevIndex = currentIndex === 0 ? genre.length - 1 : currentIndex - 1;
  //     setCurrentTrack(genre[prevIndex]);
  //     console.log(currentTrack);
  //   };

  const audioElement = new Audio();
  audioElement.src = audio;

  const play = () => {
    audioElement.play();
  };

  const pause = () => {
    audioElement.pause();
  };

  const stop = () => {
    audioElement.pause();
    audioElement.currentTime = 0;
  };
  
  return (
    <>
      <div className="d-flex justify-content-center">
      <img src={Art} alt="album art" />
      <div>  
        <button ><Prev /></button>
        <button onClick={play}
         ><Play /></button>
        <button ><Next /></button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
      </div>
      </div>
      <audio src={audio} />
    </>
  );
};

export default NowPlaying;


