"use client";

import React, { useRef, useCallback, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const ImageCarousel = () => {
  const splideRef = useRef(null);

  const images = [
    {
      id: 1,
      url: "https://via.assets.so/movie.png?id=1&q=95&w=360&h=360&fit=fill",
      alt: "Image 1",
    },
    // {
    //   id: 2,
    //   url: "https://via.assets.so/movie.png?id=2&q=95&w=360&h=360&fit=fill",
    //   alt: "Image 2",
    // },
  ];

  const handleSlideClick = (e) => {
    e.stopPropagation();
    const slideElement = e.target.closest(".splide__slide");
    const slideId = slideElement.dataset.splideSlideId;
    console.log("Clicked on", e.target, " | with id:", slideId);
  };

  function getPathToElement(parent, element) {
    const path = [];
    let current = element;

    while (current !== parent && current.parentElement) {
      const children = Array.from(current.parentElement.children);
      path.unshift(children.indexOf(current));
      current = current.parentElement;
    }

    return path;
  }

  function findElementByPath(parent, path) {
    let current = parent;

    for (const index of path) {
      if (current.children[index]) {
        current = current.children[index];
      } else {
        return null;
      }
    }

    return current;
  }

  const setupEventHandlers = () => {
    if (splideRef.current && splideRef.current.splide) {
      const splideInstance = splideRef.current.splide;
      splideInstance.root.addEventListener("click", (e) => {
        const slideElement = e.target.closest(".splide__slide");
        const slideId = slideElement.dataset.splideSlideId;
        const isClone = e.target.closest(".splide__slide--clone");

        if (isClone) {
          // console.log("Bie debug 1", e.target.closest('li'));
          const originalSlide = document.querySelector(
            `.splide__slide:not(.splide__slide--clone)[data-splide-slide-id="${slideId}"]`
          );
          if (originalSlide) {
            const path = getPathToElement(
              e.target.closest(".splide__slide"),
              e.target
            );
            // console.log(path);
            const originalElement = findElementByPath(originalSlide, path);
            // console.log("originalElement", originalElement);
            if (originalElement) {
              originalElement.click();
            }
          }
        }
      });

      console.log("Event handlers set up successfully");
    } else {
      console.log("Splide instance not available yet");
    }
  };

  useEffect(() => {
    if (splideRef.current) {
      if (splideRef.current.splide) {
        setupEventHandlers();
      } else {
        const observer = new MutationObserver(() => {
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
  }, []);

  return (
    <Splide
      ref={splideRef}
      options={{
        rewind: true,
        gap: "1rem",
        perPage: 5,
        perMove: 1,
        pagination: false,
        arrows: true,
        type: "loop",
        clones: 10,
      }}
    >
      {images.map((image) => (
        <SplideSlide key={image.id} data-splide-slide-id={image.id}>
          <div style={{ position: "relative", cursor: "pointer" }}>
            <img
              src={image.url}
              alt={image.alt}
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                className="p-8 bg-black text-white"
                onClick={handleSlideClick}
              >
                Hello
              </button>
              <button
                className="p-8 bg-black text-white"
                onClick={handleSlideClick}
              >
                World
              </button>
              <div className="div-2">
                <div className="div-3">
                  <button
                    className="p-8 bg-black text-white"
                    onClick={handleSlideClick}
                  >
                    Inside 3
                  </button>
                </div>
              </div>
            </div>
            <p>Slide {image.id}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ImageCarousel;
