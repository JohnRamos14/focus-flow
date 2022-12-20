import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";

const NowPlaying = () => {
  const [playlist, setPlaylist] = useState([]);
  const location = useLocation();
  const playlistId = location.state.playlistId;

  const fetchPlaylist = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='PL06diOotXAJJHjvUm7FNNG5a7XUA2_C27'&key='AIzaSyCsSzCnKI0IeLMs8KchtIgx0F-yCfvwNuc'`
    );
    const data = await response.json();
    setPlaylist(data.items);
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <YouTube
      videoId={playlist[0].snippet.resourceId.videoId}
      opts={{
        height: "360",
        width: "640",
        playerVars: {
          autoplay: 1,
          controls: 1,
          showinfo: 0,
          playlist: playlist
            .map((item) => item.snippet.resourceId.videoId)
            .join(","),
        },
      }}
    />
  );
};

export default NowPlaying;
