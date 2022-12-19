import React from "react";
// import {getVideo} from '../video/service/videoService'



const MusicPlayer = () => {
  // const [songs, setSongs] = useState(null);
  // console.log(songs);
 
  // useEffect(() => {
  //   getVideo().then(onGetVideoSuccess).catch(onGetVideoError);
  // }, []);

  // const onGetVideoSuccess = (response) => {
  //   console.log(response.data.items);
  //   setSongs(response.data.items);
  // };

  // const onGetVideoError = (response) => {
  //   console.error({ error: response });
  // };

  // const songToPlay = songs ? songs.map((song) => {
  //   return (
  //     <div key={song.id}>
  //       <audio src={"https://soundcloud.com/monstercat/infected-mushroom-lies-and-deceptions-bad-computer-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} controls />
  //     </div>
  //   );
  // }) : (
  //   <p>Loading...</p>
  // );

    // <div>
    //   {songToPlay}
    // </div>

    //testing

  return (
    <>
  
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

export default MusicPlayer;

