import React, { useState, useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { getPlaylist } from "./service/videoService";
import { Col } from "react-bootstrap";

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

  return (
    <>
    <div>MULITVIDEOS</div>
      {/* <Col lg={4} md={6} className="d-flex align-items-stretch">
        <div>
          {playlist.snippet.resourceId.videoId.map((song) => {
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: song.snippet.resourceId.videoId,
                    provider: "youtube",
                  },
                ],
              }}
              key={song.snippet.resourceId.videoId}
            />;
          })}
        </div>
      </Col> */}
    </>
  );
};
export default Multivideos;
