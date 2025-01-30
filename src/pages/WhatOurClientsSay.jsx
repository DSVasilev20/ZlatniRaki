import React, { useEffect, useState } from "react";
import "./WhatOurClientsSay.css";
import defaultImage from "../assets/artist.jpg";

const WhatOurClientsSay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This service was outstanding! Highly recommend to anyone looking for quality.",
      image: defaultImage,
    },
    {
      name: "Jane Smith",
      feedback:
        "A wonderful experience from start to finish. Exceptional attention to detail!",
      image: defaultImage,
    },
    {
      name: "Robert Johnson",
      feedback:
        "Professional and reliable. I'm beyond satisfied with the results!",
      image: defaultImage,
    },
  ];

  const openFullscreen = (image) => {
    setCurrentImage(image);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setCurrentImage(null);
  };

  return (
    <div className="main-content">
      <div className="clients-say-page">
        <h1 className="clients-header">What Our Clients Say</h1>
        <p className="clients-subtext">
          See what our satisfied customers have to say about us!
        </p>

        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-wrapper">
              <div
                className="testimonial-image-container"
                onClick={() => openFullscreen(testimonial.image)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-top-image"
                />
              </div>
              <div className="testimonial-card">
                <p className="testimonial-feedback">
                  &quot;{testimonial.feedback}&quot;
                </p>

                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isFullscreen && (
        <div className="fullscreen-container" onClick={closeFullscreen}>
          <button className="close-fullscreen">✖</button>
          <img
            className="fullscreen-image"
            src={currentImage}
            alt="Fullscreen"
          />
        </div>
      )}
    </div>
  );
};

export default WhatOurClientsSay;
