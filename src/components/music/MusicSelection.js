import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getJazzPlaylist,
  getCoffeePlaylist,
  getRockPlaylist,
  getHipHoplist,
} from "../video/service/videoService";
import "./selectionStyles.css";

const MusicSelection = () => {
  const [jazzPlaylistId, setJazzPlaylistId] = useState(null);
  const [rockPlaylistId, setRockPlaylistId] = useState(null);
  const [hiphopPlaylistId, sethiphopPlaylistId] = useState(null);
  const [coffeePlaylistId, setCoffeePlaylistId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getJazzPlaylist()
      .then(onGetJazzSuccess)
      .catch(onGetJazzError);
    getCoffeePlaylist()
      .then(onGetCoffeeSuccess)
      .catch(onGetCoffeeError);
    getRockPlaylist()
      .then(onGetRockSuccess)
      .catch(onGetRockError);
    getHipHoplist()
      .then(onGetHipHopSuccess)
      .catch(onGetHiphopError);
  }, []);

  const onGetJazzSuccess = (response) => {
    setJazzPlaylistId(response.data.items);
  };

  const onGetJazzError = (response) => {
    console.error({ error: response });
  };

  const onGetCoffeeSuccess = (response) => {
    setCoffeePlaylistId(response.data.items);
  };

  const onGetCoffeeError = (response) => {
    console.error({ error: response });
  };

  const onGetRockSuccess = (response) => {
    setRockPlaylistId(response.data.items);
  };

  const onGetRockError = (response) => {
    console.error({ error: response });
  };

  const onGetHipHopSuccess = (response) => {
    sethiphopPlaylistId(response.data.items);
  };

  const onGetHiphopError = (response) => {
    console.error({ error: response });
  };

  const selectGenre = (genre) => {
    let playlistId;
    switch (genre) {
      case "jazz":
        playlistId = jazzPlaylistId;
        break;
      case "coffee":
        playlistId = coffeePlaylistId;
        break;
      case "rock":
        playlistId = rockPlaylistId;
        break;
      case "hiphop":
        playlistId = hiphopPlaylistId;
        break;
      default:
        playlistId = null;
    }
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

            <Button onClick={() => selectGenre("coffee")} className="subbutton">Select</Button>

          </div>
          <div className="genre-box">
            <h2>Lofi Jazz</h2>
            <ul className="track-list"></ul>
            <Button onClick={() => selectGenre("jazz")} className="subbutton" >Select</Button>
       </div>
          <div className="genre-box">
            <h2>Rock</h2>
            <ul className="track-list"></ul>
            <Button onClick={() => selectGenre("rock")} className="subbutton">Select</Button>

          </div>
          <div className="genre-box">
            <h2>Hip Hop</h2>
            <ul className="track-list"></ul>
            <Button onClick={() => selectGenre("hiphop")} className="subbutton">Select</Button>

          </div>
        </div>
      </div>
    </>
  );
};

export default MusicSelection;
