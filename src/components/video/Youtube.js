import React, { useState, useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "../video/videoStyles.css";
import { getVideo } from "./service/videoService";
import Multivideos from "./Multivideos";

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
    return video.id;
  });

  return (
    <>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: videoToPlay,
              provider: "youtube",
            },
          ],
  
        }}
      />
      

    </>
  );
};

export default Youtube;
