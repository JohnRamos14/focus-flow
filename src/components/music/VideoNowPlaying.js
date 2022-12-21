import React, { useState, useEffect, memo } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const VideoNowPlaying = () => {
  const video = JSON.parse(localStorage.getItem("vid"));
  const [currentvideo, setCurrentVideo] = useState(video);

  useEffect(() => {
    setCurrentVideo(video);
  }, []);

  return (
    <>
      <div className="plyr-container" style={{ width: "50%" }}>
        {Array.isArray(currentvideo) && currentvideo.length === 0 ? null : (
          <Plyr
            autoPlay={true}
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
        )}
      </div>
    </>
  );
};

export default memo(VideoNowPlaying);
