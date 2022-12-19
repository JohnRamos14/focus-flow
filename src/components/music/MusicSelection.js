import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MusicSelectionPage = () => {
  const tracks = [
    { id: 1, name: 'Track 1' },
    { id: 2, name: 'Track 2' },
    { id: 3, name: 'Track 3' }
  ];

  const navigate = useNavigate();

  const selectTrack = (trackId) => {
    navigate(`/now-playing/${trackId}`);
  };

  return (
    <>
    <div>
      <h1>Music Selection</h1>
      <ul>
        {tracks.map(track => (
          <li key={track.id}>
            <Link to={`/now-playing/${track.id}`} onClick={() => selectTrack(track.id)}>{track.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default MusicSelectionPage;
