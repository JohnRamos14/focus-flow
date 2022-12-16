import React from 'react'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"

 const Multivideos = () => {
   
  return (
    <Plyr source={{
      type: "video",
      sources: [
        {
          src: "lPCc78REQpU",
          provider: "youtube"
        }
      ]
    }} />  
  )
}
export default Multivideos;
