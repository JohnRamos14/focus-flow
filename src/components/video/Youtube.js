import React, {useState, useEffect} from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import '../video/videoStyles.css'
import {getPlaylist} from './service/videoService'
import Multivideos from './Multivideos'

 const Youtube = () => {

  const [playlist, setPlaylist] = useState([])
  console.log(playlist)

  useEffect(() => {
    console.log("useEffect")
    getPlaylist()
      .then(onGetPlaylistSuccess)
      .catch(onGetPlaylistError)
  }, [])

  const onGetPlaylistSuccess = (response) => {
    let result = response.data.items
    setPlaylist(result)
  }

  const onGetPlaylistError = (response) => {
    console.error({ error: response  })

  }

  return (
    <>
    <Plyr source={{
      type: "video",
      sources: [
        {
          src: "lPCc78REQpU",
          provider: "youtube"
        }
      ]
    }} />
    <Multivideos />

    </>
  )
}

export default Youtube;