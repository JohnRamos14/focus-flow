import React, {useState} from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

 const MultiPlaylist = (props) => {

    const [playlist, setPlaylist] = useState(props.playlist)

    console.log("playlist", playlist)

  return (
    <div>
        <Plyr  />
    </div>
  )
}

export default MultiPlaylist
