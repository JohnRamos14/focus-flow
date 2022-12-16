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

  console.log(video);

  const onGetVideoError = (response) => {
    console.error({ error: response });
  };

  console.log(video);

  return (
    <>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: "lPCc78REQpU",
              provider: "youtube",
            },
          ],
        }}
      />
      <Multivideos />
    </>
  );
};

export default Youtube;
