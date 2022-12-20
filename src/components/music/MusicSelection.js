import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getJazzPlaylist,
  getCoffeePlaylist,
  getRockPlaylist,
  getHipHoplist,
} from "../video/service/videoService";
import "./selectionStyles.css";

const MusicSelection = () => {
  const [playlistId, setPlaylistId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getJazzPlaylist().then(onGetMusicSuccess).catch(onGetMusicError);

    getCoffeePlaylist().then(onGetCoffeeSuccess).catch(onGetCoffeeError);

    getRockPlaylist().then(onGetRockSuccess).catch(onGetRockError);

    getHipHoplist().then(onGetHipHopSuccess).catch(onGetHiphopError);
  }, []);

  const onGetMusicSuccess = (response) => {
    setPlaylistId(response.data.items);
  };

  const onGetMusicError = (response) => {
    console.error({ error: response });
  };

  const onGetCoffeeSuccess = (response) => {
    setPlaylistId(response.data.items);
  };

  const onGetCoffeeError = (response) => {
    console.error({ error: response });
  };

  const onGetRockSuccess = (response) => {
    setPlaylistId(response.data.items);
  };

  const onGetRockError = (response) => {
    console.error({ error: response });
  };

  const onGetHipHopSuccess = (response) => {
    setPlaylistId(response.data.items);
  };

  const onGetHiphopError = (response) => {
    console.error({ error: response });
  };

  const selectGenre = (playlistId) => {
    navigate(`/now-playing`, { state: { playlistId } });
  };

  return (
    <>
      <div>
        <h1>Music Selection</h1>
        <div className="container">
          <div className="genre-box">
            <h2>Coffee Shop </h2>
            <ul className="track-list"></ul>
            <button onClick={() => selectGenre(playlistId)} class="subbutton">Select</button>
          </div>
          <div className="genre-box">
            <h2>Lofi Jazz</h2>
            <ul className="track-list"></ul>
            <button onClick={() => selectGenre(playlistId)} class="subbutton" >Select</button>
          </div>
          <div className="genre-box">
            <h2>Rock</h2>
            <ul className="track-list"></ul>
            <button onClick={() => selectGenre(playlistId)} class="subbutton">Select</button>
          </div>
          <div className="genre-box">
            <h2>Hip Hop</h2>
            <ul className="track-list"></ul>
            <button onClick={() => selectGenre(playlistId)} class="subbutton">Select</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicSelection;
