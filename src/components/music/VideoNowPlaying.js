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
      <div className="plyr-container" style={{ width: "50%" }}>
        {Array.isArray(currentvideo) && currentvideo.length === 0 ? null : (
          // <Plyr
          //   autoPlay={true}
          //   source={{
          //     type: "video",
          //     sources: [
          //       {
          //         src: currentvideo,
          //         provider: "youtube",
          //       },
          //     ],
          //   }}
          // />
          <YouTube
      id=" youtube-player3"
      videoId={currentvideo}
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
        )}
      </div>
    </>
  );
};

export default memo(VideoNowPlaying);
