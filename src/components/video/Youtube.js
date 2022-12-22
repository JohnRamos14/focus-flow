import React, { useState, useEffect, memo } from "react";
// import Plyr from "plyr-react";
// import "plyr-react/plyr.css";
import "../video/videoStyles.css";
import { getVideo } from "./service/videoService";
import {Col} from 'react-bootstrap'
import YouTube from "react-youtube";

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
      // <Plyr
      //   key={video.id}
      //   source={{
      //     type: "video",
      //     sources: [
      //       {
      //         src: video.id,
      //         provider: "youtube",
      //       },
      //     ],
      //   }}
      // />
      <YouTube
      id=" youtube-player1"
      videoId={video.id}
      // onReady={(event) => setPlayer(event.target)}
      opts={{
        height: "360",
        width: "680",
        playerVars: {
          autoplay: 0,
          controls: 1,
          showinfo: 0,
          // playlist: playlistId
          //   .map((item) => item.snippet.resourceId.videoId)
          //   .join(","),
        },
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
