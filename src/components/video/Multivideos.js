import React, { useState, useEffect, memo } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { getPlaylist } from "./service/videoService";
import { Button, Col, Row } from "react-bootstrap";
import "./videoStyles.css";

const Multivideos = () => {
  const [playlist, setPlaylist] = useState([]);

  // Local Storage
  // const [btnInput, setBtnInput] = useState('');
  const [vid, setVid] = useState(() => {
    const saved = localStorage.getItem("vid");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  function handleSelect(vidId) {
    setVid([vidId]);
  }

  useEffect(() => {
    // storing input task
    localStorage.setItem("vid", JSON.stringify(vid));
    console.log(localStorage.getItem("vid"));
  }, [vid]);

  //

  useEffect(() => {
    // console.log("useEffect");
    getPlaylist().then(onGetPlaylistSuccess).catch(onGetVideoError);
  }, []);

  const onGetPlaylistSuccess = (response) => {
    setPlaylist(response.data.items);
  };

  const onGetVideoError = (response) => {
    console.error({ error: response });
  };

  // console.log(playlist);

  const videoPlayers = playlist.map((video, index) => {
    console.log('video:', video)
    return (
   
      <Col id="player2" lg={4} key={index}>
        <Plyr
          source={{
            type: "video",
            sources: [
              { src: video.snippet.resourceId.videoId, provider: "youtube"},
            ],
          }}
        />
        <div className="videoTitle">{video.snippet.title}</div>

        <Button
        id="select-btn"
          href="/musicSelection"
          type="button"
          onClick={() => handleSelect(video.snippet.resourceId.videoId)}>
          Select
          {/* save to local & go to the music page */}
        </Button>
      </Col>

    );
  });
  return (
    <>
      <div id="header-container">
        <h1 className="header-section">Video Selection </h1>
        <div id="btn-container">
        <Button id="skip-btn" href="/musicSelection">
          Skip to Music
        </Button>
        </div>
      </div>
      <Row className="row2">{videoPlayers}</Row>
    </>
  );
};

export default memo(Multivideos);
