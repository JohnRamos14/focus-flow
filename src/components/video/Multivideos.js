import React, { useState, useEffect} from "react";
// import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { getPlaylist } from "./service/videoService";

const Multivideos = () => {
    const [playlist, setPlaylist] = useState([]);
    console.log(playlist);

    useEffect(() => {
        console.log("useEffect");
        getPlaylist().then(onGetPlaylistSuccess).catch(onGetVideoError);
      }, []);
    
      const onGetPlaylistSuccess = (response) => {
        let result = response.data.items;
        setPlaylist(result);
      };
    
      const onGetVideoError = (response) => {
        console.error({ error: response });
      };

      console.log(playlist);
    

  return (
    <>
    <div>Multi Video Scree</div>
      {/* <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: "lPCc78REQpU",
              provider: "youtube",
            },
          ],
        }}
      /> */}
    </>
  );
};
export default Multivideos;
