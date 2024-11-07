// src/components/Gallery.tsx
import React, { useState } from "react";
import "../style/gallery.css";
import ArrowRight from "../assets/icons/arrow-right.svg";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import styled from "styled-components";

interface Image {
  src: string;
}

interface GalleryProps {
  className?: string;
  width?: string;
  height?: string;
  radius?: string;
  showThumbs?: boolean;
  images: Image[];
}

// width = "750px";
// height = "570px";
// radius = "4px";

const Gallery: React.FC<GalleryProps> = ({
  className,
  width,
  height,
  radius,
  showThumbs,
  images,
}) => {
  const DivContainer = styled.div`
    width: ${width};
    height: ${height};
    & .gallery-slide {
      width: 85%;
      height: 100%;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & .gallery-thumbnails img {
      width: 117px;
      height: 95px;

      justify-content: center;
    }
    @media (max-width: 900px) {
      display: grid;
      width: 85%;
      height: 100%;
      & .gallery-slide {
        padding: 0;
        width: calc(100vw - 20px);
        height: 100%;
      }
      & .gallery-thumbnails {
        margin-left: 20px;
      }
      & .gallery-thumbnails img {
        justify-content: start;
        justify-items: center;
        width: 90px;
        height: 90px;
      }
    }
    @media (max-width: 400px) {
      & .gallery-thumbnails img {
        width: 60px;
        height: 60px;
      }
    }
  `;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <DivContainer className={`gallery ${className}`}>
      <div className="gallery-slide">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className="gallery-image"
          style={{ borderRadius: radius }}
        />
        <button
          className="gallery-arrow gallery-arrow-left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={ArrowLeft} alt="Previous" />
        </button>
        <button
          className="gallery-arrow gallery-arrow-right"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          <img src={ArrowRight} alt="Next" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index}`}
              className={`gallery-thumbnail ${
                currentIndex === index ? "active" : ""
              }`}
              style={{ borderRadius: radius }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      )}
    </DivContainer>
  );
};

export default Gallery;
