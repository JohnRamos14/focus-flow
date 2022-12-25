import React, { useState, useEffect, memo } from "react";
import YouTube from "react-youtube";

const VideoNowPlaying = () => {
  const video = JSON.parse(localStorage.getItem("vid"));
  const [currentvideo, setCurrentVideo] = useState(video);

  useEffect(() => {
    setCurrentVideo(video);
  }, []);

  return (
    <>
      <div className="plyr-container" style={{ width: "60%",}}>
        {Array.isArray(currentvideo) && currentvideo.length === 0 ? null : (
          <YouTube
            id=" youtube-player3"
            videoId={currentvideo}
            opts={{
              height: "360",
              width: "680",
              playerVars: {
                autoplay: 0,
                controls: 1,
                showinfo: 0,
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default memo(VideoNowPlaying);
