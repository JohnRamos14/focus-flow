import React, { useState, useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { getPlaylist } from "./service/videoService";
import { Col, Row } from "react-bootstrap";

const Multivideos = () => {
  const [playlist, setPlaylist] = useState([]);
  console.log(playlist);

  useEffect(() => {
    console.log("useEffect");
    getPlaylist().then(onGetPlaylistSuccess).catch(onGetVideoError);
  }, []);

  const onGetPlaylistSuccess = (response) => {
    setPlaylist(response.data.items);
  };

  const onGetVideoError = (response) => {
    console.error({ error: response });
  };

  console.log(playlist);

  const videoPlayers = playlist.map((video, index) => {
    return (
      <Col
        className="justify-center"
        style={{ width: "30%", marginLeft: "50px", paddingBottom: "5px" }}
        lg={4}
        key={index}
      >
        <Plyr
          source={{
            type: "video",
            sources: [
              { src: video.snippet.resourceId.videoId, provider: "youtube" },
            ],
          }}
        />
      </Col>
    );
  });

  return (
    <>
      <Row>{videoPlayers}</Row>
    </>
  );
};
export default Multivideos;
