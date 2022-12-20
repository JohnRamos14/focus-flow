import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getJazzPlaylist} from '../video/service/videoService';

const MusicSelection = () => {
  const [playlist, setPlaylist] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    getJazzPlaylist()
    .then(onGetMusicSuccess)
    .catch(onGetMusicError);
  }, []);

  const onGetMusicSuccess = (response) => {
    setPlaylist(response.data.items);
  };

  const onGetMusicError = (response) => {
    console.error({ error: response });
  };

    const selectGenre = (playlistId) => {
    navigate(`/now-playing`, { state: { playlistId } });
  };

  console.log(playlist);

  return (
    <>
         <div>
         <h1>Music Selection</h1>
         <div className="container">
           <div className="genre-box">
             <h2>Lofi Hip Hop</h2>
             <ul className="track-list">
            </ul>
            <button onClick={() => selectGenre(playlist)}>Select</button>
          </div>
          <div className="genre-box">
            <h2>Lofi Jazz</h2>
            <ul className="track-list">   
            </ul>
            <button onClick={() => selectGenre(playlist)}>Select</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicSelection;

