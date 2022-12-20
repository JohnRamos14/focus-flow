import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import "./nowPlayingStyles.css";
import {ReactComponent as Play} from './assets/play.svg'
import{ReactComponent as Pause} from './assets/pause.svg'
import {ReactComponent as Prev} from './assets/prev.svg'
import {ReactComponent as Next} from './assets/next.svg'
// import Tasks from "../Tasks/tasks";

const NowPlaying = () => {
  const [playlist, setPlaylist] = useState([]);
  const location = useLocation();
  const playlistId = location.state.playlistId;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const onPlay = () => {
    player.playVideo();
    setIsPlaying(true);
  };

  const onPause = () => {
    player.pauseVideo();
    setIsPlaying(false);
  };

  const onNext = () => {
    player.loadVideoById(playlistId[(currentIndex + 1) % playlistId.length].snippet.resourceId.videoId);
    setCurrentIndex((currentIndex + 1) % playlistId.length);
  };
  

  const onPrevious = () => {
    setCurrentIndex((currentIndex - 1 + playlistId.length) % playlistId.length);
    player.loadVideoById(playlist[currentIndex].snippet.resourceId.videoId);
  };

  const onStop = () => {
    player.stopVideo();
    setIsPlaying(false);
  }

  const listToListen = playlistId.map((item) => item.snippet.playlistId);
  const idToUse = listToListen[0];

  const fetchPlaylist = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${idToUse}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    setPlaylist(data.items);
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <YouTube
        videoId={playlistId[0].snippet.resourceId.videoId}
        onReady={(event) => setPlayer(event.target)}
        opts={{
          height: "0",
          width: "0",
          playerVars: {
            autoplay: 0,
            controls: 1,
            showinfo: 0,
            playlist: playlistId
              .map((item) => item.snippet.resourceId.videoId)
              .join(","),
          },
        }}
      />
      <button className="play" onClick={isPlaying ? onPause : onPlay}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <button className="prev" onClick={onPrevious}><Prev /></button>
      <button className="next" onClick={onNext}><Next/></button>
      <button className="stop" onClick={onStop}>Stop</button>
    </div>
    </>
  );
};

export default NowPlaying;

