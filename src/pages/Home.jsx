import { useState } from "react";
import "../App.css";
import yesImage from "../assets/yes.png";
import ProductCard from "../components/cards/ProductCard";

const Home = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array(10).fill(yesImage);

  const openFullscreen = (index) => {
    setCurrentImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const scrollToCollection = () => {
    const collectionSection = document.getElementById("collection-section");
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="header-background">
        <div className="header-content">
          <h1 className="welcome-section">Zlatni Raki</h1>
          <p>Explore our beautifully crafted, hand-carved Christian icons.</p>
          <button className="scroll-button" onClick={scrollToCollection}>
            Our Collection
          </button>
        </div>
      </div>

      {/* Collection Section */}
      <section id="collection-section" className="collection-section">
        <div className="cmfc">
          <h2>Custom Made For Clients</h2>
        </div>
        <hr className="custom-divider" />
        <div className="gallery">
          {images.map((img, index) => (
            <ProductCard
              key={index}
              image={img}
              index={index}
              openFullscreen={openFullscreen}
            />
          ))}
        </div>
        <button
          className="order-button"
          onClick={() => (window.location.href = "/request-a-custom-icon")}
        >
          Request a Custom Icon
        </button>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fullscreen-container">
          <button className="close-fullscreen" onClick={closeFullscreen}>
            ✖
          </button>
          <button className="arrow prev-arrow" onClick={goToPrevImage}>
            ◀
          </button>
          <img
            className="fullscreen-image"
            src={images[currentImageIndex]}
            alt={`Fullscreen Icon ${currentImageIndex + 1}`}
          />
          <button className="arrow next-arrow" onClick={goToNextImage}>
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
