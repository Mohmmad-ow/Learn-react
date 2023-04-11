import { useState } from 'react'


function Pics({displayedImage}) {
    let images = [
      {src: "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", text: "waterfall"},
      {src: "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", text: "night sand"},
      {src: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", text: "flower field"},
      {src: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", text: "green bird"},
      {src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", text: "cute cat"}
    ]
    
   
    return (
      <div key={displayedImage}>
        <img className='Carousel-image' src={images[displayedImage].src} alt={images[displayedImage].text} />
      </div>
    )
  }
  
  
  function Carousel() {
    const [displayedImage, setDisplayedImage] = useState(0)
    
    function turnLeft() {
      setDisplayedImage(displayedImage == 0 ? 4 : displayedImage - 1)
    }
  
    function turnRight() {
      setDisplayedImage(displayedImage == 4 ? 0 : displayedImage + 1)
    }
    return (
      <div className='carousel'>
        
        <button className='carousel-btn' onClick={turnLeft}>Left</button>
       
        <Pics displayedImage={displayedImage} />
        
        <button className='carousel-btn' onClick={turnRight}>Right</button>
        
        
      </div>
    )
  }

export default Carousel