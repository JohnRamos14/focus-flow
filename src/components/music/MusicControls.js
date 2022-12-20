
import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';


function MusicControls() {
  const [player, setPlayer] = useState(null);
  const youtubeRef = useRef();

  const onPlayerReady = (event) => {
    setPlayer(event.target);
    event.target.mute();
  };
  
  const onPlayerStateChange = (event) => {
    
      player.playVideo();
    
  };
  


  return (
    <YouTube
      ref={youtubeRef}
      videoId="8nXqcugV2Y4"
      opts={{
        height: '100%',
        width: '100',
        playerVars: {
          autoplay: 1,
          controls: 1,
          showinfo: 1
        }
      }}
      onReady={onPlayerReady}
      onStateChange={onPlayerStateChange}
    />
  );
  
}

export default MusicControls