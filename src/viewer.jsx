import { useState } from "react"

const videos = {
    deer:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
}


function Menu({handelClick}) {

  const options = Object.keys(videos).map((video, ind) => {
    return (
     <div key={ind}>
       <input onClick={handelClick} value={video} type="radio" name="src" />
      {video}
     </div>
    )

  })
  return(
    <div className="videos-radio"> 
      {options} 
    </div>
  )
}

function Video({src, done}) {

  return (
    <video id="video"  onLoadedData={done} className="videos" loop controls autostart="true" autoPlay muted src={src}></video>
  )
}

export default function Viewer() {
  const [video, setVideo] = useState(videos['deer']);
  const [loading, setLoading] = useState(false);
  
  function changeVideo(e) {
    console.log(e.target.value)
    const name = e.target.value
    setLoading(true);
    setVideo(videos[name])
  }
  function done() {
    setLoading(false)
  }
  


  return (
    <div>
      <Menu handelClick={changeVideo} />
      {loading && <p>Loading video...</p>}
      <div style={{visibility: loading ? "hidden" : "visible"}}>
      <Video done={done} src={video} />
      </div>
    </div>
  )
}
