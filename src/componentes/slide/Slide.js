import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./Slide.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import slide1 from "../../imagens/Prancheta 2.png";
import slide2 from "../../imagens/Prancheta 3.png";
import slide3 from "../../imagens/slide3.jpg";

const images = [
  {
      original: slide1
    },
    {
      original: slide2
    },
    {
      original: slide3
    },
];

export default function Slide(){
  return (
    <div id="slide">
      <ImageGallery items={images} lazyLoad={true} showPlayButton={false} autoPlay={true} showThumbnails={false} slideDuration={2000} slideInterval={10000} showFullscreenButton={false}/>
    </div>
  );
}