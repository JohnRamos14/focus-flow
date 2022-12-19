import React from 'react';
import { useParams } from 'react-router-dom';

const NowPlaying = () => {
  const { trackId } = useParams();
  // ...


  
    return (
      <>
      TESTING
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <button>Previous</button>
          <button>Play/Pause</button>
          <button>Next</button>
        </div>
        <div>
          <p>Now Playing: Song Title</p>
          <p>Artist Name</p>
        </div>
        <div>
          <input type="range" min="0" max="100" value="50" />
        </div>
      </div>
      </>
    );
  };

  
  export default NowPlaying;