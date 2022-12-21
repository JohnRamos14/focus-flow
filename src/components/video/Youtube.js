import React, { useState, useEffect, memo } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "../video/videoStyles.css";
import { getVideo } from "./service/videoService";
import {Col} from 'react-bootstrap'

const Youtube = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    getVideo().then(onGetVideoSuccess).catch(onGetVideoError);
  }, []);

  const onGetVideoSuccess = (response) => {
    setVideo(response.data.items);
  };

  const onGetVideoError = (response) => {
    console.error({ error: response });
  };

  const videoToPlay = video.map((video) => {
    return (
      <Plyr
        key={video.id}
        source={{
          type: "video",
          sources: [
            {
              src: video.id,
              provider: "youtube",
            },
          ],
        }}
      />
    );
  });

  return (
    <>
      <Col >
      <div id="player1">{videoToPlay}</div>
      </Col>
    </>
  );
};

export default memo(Youtube);
