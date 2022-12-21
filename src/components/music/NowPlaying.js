import React, { useEffect, useState, useRef } from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import "./nowPlayingStyles.css";
import { CardGroup, Card } from "react-bootstrap";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
import { ReactComponent as Prev } from "./assets/prev.svg";
import { ReactComponent as Next } from "./assets/next.svg";
import Tasks from "../Tasks/tasks";
import Timer from "../Timer/Timer";
import Counter from "../Counter/Counter";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
// import { getVideo } from "./service/videoService";

const NowPlaying = () => {
  const video = JSON.parse(localStorage.getItem("vid"));
  const [playlist, setPlaylist] = useState([]);
  const location = useLocation();
  const playlistId = location.state.playlistId;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);
  const [currentvideo, setCurrentVideo] = useState(video);

  const onPlay = () => {
    player.playVideo();
    setIsPlaying(true);
  };

  const onPause = () => {
    player.pauseVideo();
    setIsPlaying(false);
  };

  const onNext = () => {
    player.loadVideoById(
      playlistId[(currentIndex + 1) % playlistId.length].snippet.resourceId
        .videoId
    );
    setCurrentIndex((currentIndex + 1) % playlistId.length);
  };

  const onPrevious = () => {
    setCurrentIndex((currentIndex - 1 + playlistId.length) % playlistId.length);
    player.loadVideoById(playlist[currentIndex].snippet.resourceId.videoId);
  };

  const onStop = () => {
    player.stopVideo();
    setIsPlaying(false);
  };

  const listToListen = playlistId.map((item) => item.snippet.playlistId);
  const idToUse = listToListen[0];

  const fetchPlaylist = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${idToUse}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    setPlaylist(data.items);
  };

  useEffect(() => {
    // getVideo.then(onGetVideoSuccess).catch(getVideoError);
    setCurrentVideo(video);
    fetchPlaylist();
  }, []);
  console.log(currentvideo);
  // timer and task to render
  const [sessionLengthCounter, setSessionLengthCounter] = useState(25);

  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const timerRef = useRef();

  const increaseSessionLengthCounter = () => {
    if (sessionLengthCounter < 60) {
      setSessionLengthCounter(sessionLengthCounter + 1);
      setTimeout(() => timerRef.current.restartTimer(), 5);
    }
  };

  const decreaseSessionLengthCounter = () => {
    if (sessionLengthCounter > 1) {
      setSessionLengthCounter(sessionLengthCounter - 1);
      setTimeout(() => timerRef.current.restartTimer(), 5);
    }
  };


  return (
    <>
    <div className="plyr-container" style={{width: "50%"}}>
        {currentvideo ? (
          <Plyr
            autoPlay={true}
            aut
            source={{
              type: "video",
              sources: [
                {
                  src: currentvideo,
                  provider: "youtube",
                },
              ],
            }}
          />
        ) : null}
      </div>
      <YouTube
        id=" youtube-player"
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
      <div>
        <div className="d-flex justify-content-center">
          <button className="play" onClick={isPlaying ? onPause : onPlay}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button className="prev" onClick={onPrevious}>
            <Prev />
          </button>
          <button className="next" onClick={onNext}>
            <Next />
          </button>
          <button className="stop" onClick={onStop}>
            Stop
          </button>
        </div>
        <br />
        <CardGroup id="home-card-group">
          <Card>
            <Tasks />
          </Card>
          <Card>
            {/* <div id="home-container">
      <div id="clock-container"> */}
            <Counter
              labelId="session-label"
              counterId="session-length"
              counterLabel="Set Minutes"
              counter={sessionLengthCounter}
              increaseCounter={increaseSessionLengthCounter}
              decreaseCounter={decreaseSessionLengthCounter}
              incrementBtnId="session-increment"
              decrementBtnId="session-decrement"
              timerIsRunning={timerIsRunning}
            />

            <Timer
              sessionTime={sessionLengthCounter}
              passRunning={setTimerIsRunning}
              setSessionLength={setSessionLengthCounter}
              ref={timerRef}
            />
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default NowPlaying;
