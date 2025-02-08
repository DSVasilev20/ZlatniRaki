import { useEffect } from "react";
import "./AboutTheArtist.css";
import artistImage from "../assets/artist.jpg";

const AboutTheArtist = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-content">
      {" "}
      {/* <-- Ensure this wrapper is present */}
      <div className="about-the-artist-page">
        <div className="about-the-artist-container">
          <h1 className="about-the-artist-header">About the Artist</h1>
          <div className="about-the-artist-content">
            <div className="artist-details">
              <h2 className="artist-name">Dimitar Goleshev</h2>
              <p>
                Born and raised in a world full of vibrant colors and textures,
                our artist has always found solace in expressing emotions
                through creativity. Their journey began with simple sketches,
                evolving into a passion for unique icon designs that capture the
                essence of individuality and culture.
              </p>
              <p>
                With years of experience and dedication, the artist has mastered
                the art of blending traditional elements with modern aesthetics,
                resulting in timeless creations that speak to the soul.
              </p>
              <p>
                Each piece is a testament to their commitment to authenticity,
                crafted with love and an unwavering attention to detail. Through
                their work, the artist aims to inspire and connect with people
                from all walks of life.
              </p>
            </div>
            <div className="artist-image-wrapper">
              <img
                src={artistImage}
                alt="Dimitar Goleshev"
                className="artist-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div> /* <-- Closing .main-content wrapper */
  );
};

export default AboutTheArtist;