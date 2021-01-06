import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./Slide.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import slide3 from "../../imagens/slide3.jpg";

const images = [
  {
      original: slide3
    },
    {
      original: slide3
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