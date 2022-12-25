import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { getPlaylist } from "./service/videoService";
import { Button, Col, Row } from "react-bootstrap";
import "./videoStyles.css";
import YouTube from "react-youtube";

const Multivideos = () => {
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState([]);
  const [vid, setVid] = useState(() => {
    const saved = localStorage.getItem("vid");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  function handleSelect(vidId) {
    setVid([vidId]);
    localStorage.setItem("vid", JSON.stringify(vidId));
    navigate("/musicSelection");
  }

  useEffect(() => {
    localStorage.setItem("vid", JSON.stringify(vid));
    console.log(localStorage.getItem("vid"));
  }, [vid]);

  useEffect(() => {
    getPlaylist().then(onGetPlaylistSuccess).catch(onGetVideoError);
  }, []);

  const onGetPlaylistSuccess = (response) => {
    setPlaylist(response.data.items);
  };

  const onGetVideoError = (response) => {
    console.error({ error: response });
  };

  const videoPlayers = playlist.map((video, index) => {
    return (
      <Col id="player2" lg={4} key={index}>
        <YouTube
          id=" youtube-player2"
          videoId={video.snippet.resourceId.videoId}
          opts={{
            height: "360",
            width: "640",
            playerVars: {
              autoplay: 0,
              controls: 1,
              showinfo: 0,
            },
          }}
        />
        <div className="videoTitle">{video.snippet.title}</div>

        <Button
          id="select-btn"
          type="button"
          onClick={() => handleSelect(video.snippet.resourceId.videoId)}
        >
          Select
        </Button>
      </Col>
    );
  });

  return (
    <>
      <div id="header-container">
        <h1 className="header-section">Video Selection </h1>
        <div id="btn-container">
          <Button id="skip-btn" onClick={() => navigate("/musicSelection")}>
            Skip to Music
          </Button>
        </div>
      </div>
      <Row className="row2">{videoPlayers}</Row>
    </>
  );
};

export default memo(Multivideos);
