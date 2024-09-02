"use client";

import React, { useRef, useCallback, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const ImageCarousel = () => {
  const splideRef = useRef(null);

  const images = [
    { id: 1, url: 'https://via.assets.so/movie.png?id=1&q=95&w=360&h=360&fit=fill', alt: 'Image 1' },
		// { id: 2, url: 'https://via.assets.so/movie.png?id=2&q=95&w=360&h=360&fit=fill', alt: 'Image 2' },
  ];

  const handleSlideClick = useCallback((id, isClone) => {
    console.log(`Clicked on ${isClone ? 'cloned' : 'original'} slide with id: ${id}`);
  }, []);

  const setupEventHandlers = useCallback(() => {
    if (splideRef.current && splideRef.current.splide) {
      const splideInstance = splideRef.current.splide;
      splideInstance.root.addEventListener('click', (e) => {
				e.stopPropagation();
				const slideElement = e.target.closest('.splide__slide');
				const slideId = slideElement.dataset.splideSlideId;
				const isClone =  e.target.closest('.splide__slide--clone');
        if (e.target.classList.contains('hello-btn') || e.target.classList.contains('world-btn')) {
          const buttonType = e.target.classList.contains('hello-btn') ? 'Hello' : 'World';
          console.log(`${buttonType} from ${isClone ? 'cloned' : 'original'} slideId ${slideId}`);
        } else {
					handleSlideClick(slideId, isClone);
				}
      });

      console.log("Event handlers set up successfully");
    } else {
      console.log("Splide instance not available yet");
    }
  }, [handleSlideClick, images]);

  useEffect(() => {
    if (splideRef.current) {
      if (splideRef.current.splide) {
        setupEventHandlers();
      } else {
        const observer = new MutationObserver((mutations) => {
          if (splideRef.current && splideRef.current.splide) {
            setupEventHandlers();
            observer.disconnect();
          }
        });
        observer.observe(splideRef.current, { childList: true, subtree: true });
      }
    }
    return () => {
      if (splideRef.current && splideRef.current.splide) {
        splideRef.current.splide.destroy();
      }
    };
  }, [setupEventHandlers]);

  return (
    <Splide
      ref={splideRef}
      options={{
        rewind: true,
        gap: '1rem',
        perPage: 5,
        perMove: 1,
        pagination: false,
        arrows: true,
        type: 'loop',
        clones: 10,
      }}
    >
      {images.map((image) => (
        <SplideSlide key={image.id} data-splide-slide-id={image.id}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <img 
              src={image.url} 
              alt={image.alt} 
              style={{ width: '100%', height: 'auto' }} 
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              gap: '10px'
            }}>
              <button className="hello-btn p-8 bg-black text-white">Hello</button>
              <button className="world-btn p-8 bg-black text-white">World</button>
            </div>
            <p>Slide {image.id}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImageCarousel;