import React from 'react';
import { useNavigate } from 'react-router-dom';
import './selectionStyles.css';


const MusicSelectionPage = () => {
  const lofiHipHop = [
    { id: 1, title: 'Can We Kiss Forever', scr: './Kina_Can_We_Kiss_Forever_(ft. Adriana Proenza).mp3'},
    { id: 2, title: 'Get You The Moon', scr: './Kina_Get_You_The_Moon_(ft. Snow).mp3'},
  ];
  const lofiJazz = [
    { id: 1, title: 'Slow Jazz', scr: './SlowJazz01.mp3'},
    { id: 2, title: 'Smooth Jazz', scr: './SmoothJazz02.mp3'},
  ];


  const navigate = useNavigate();

  const selectGenre = (genre) => {
    navigate(`/now-playing`, { state: { genre } });
  };


  return (
    <>
      <div>
        <h1>Music Selection</h1>
        <div className="container">
          <div className="genre-box">
            <h2>Lofi Hip Hop</h2>
            <ul className="track-list">
              {lofiHipHop.map((track) => (
                <li key={track.id}>{track.title}</li>
              ))}
            </ul>
            <button onClick={() => selectGenre(lofiHipHop)}>Select</button>
          </div>
          <div className="genre-box">
          <h2>Lofi Jazz</h2>
          <ul className="track-list">
            {lofiJazz.map((track) => (
              <li key={track.id}>{track.title}</li>
            ))}
          </ul>
          <button onClick={() => selectGenre(lofiJazz)}>Select</button>
          </div>
        </div>
      </div>
    </>
  );
};


export default MusicSelectionPage;
