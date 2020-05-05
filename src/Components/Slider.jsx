import React from 'react'
import ReactDOM from "react-dom"
import { Gallery, GalleryImage } from "react-gesture-gallery";


import '../Styles/Slider.scss'

const images = [
    "http://localhost:3000/static/media/slr2@2x.67085d41.png",
    "http://localhost:3000/static/media/slr1@2x.1b84e448.png",
    "http://localhost:3000/static/media/slr3@2x.36ff7aa7.png",
    "http://localhost:3000/static/media/slr4@2x.7fe5896f.png",
    "http://localhost:3000/static/media/slr6@2x.8cd7eef3.png"
  ];
const Slider=()=>{
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
          if (index === 4) {
            setIndex(0);
          } else {
            setIndex(prev => prev + 1);
          }
        }, 3000);
        return () => clearInterval(timer);
      }, [index]);

    return(
        <div className="slider">
         <Gallery
      style={{
        background: "white",
        height: "100vh",
        width: "100vw"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
    </Gallery>

        </div>
    )
}
export default Slider;