import { useState } from "react";
import "./Home.css";
import ProductCard from "../components/cards/ProductCard";

// Auto-import all images from the assets folder
const images = import.meta.glob("../assets/*.png", { eager: true });

// Function to get images based on product name
const generateProductImages = (productName) => {
  return Object.keys(images)
    .filter((key) => key.includes(productName))
    .map((key) => images[key].default)
    .sort(); // Ensures they are in the correct order
};

// Define the products dynamically
const products = [
  { id: 1, name: "Product_first", images: generateProductImages("Product_first") },
  { id: 2, name: "Product_second", images: generateProductImages("Product_second") },
  { id: 3, name: "Product_third", images: generateProductImages("Product_third") },
  { id: 4, name: "Product_first", images: generateProductImages("Product_first") },
  { id: 5, name: "Product_second", images: generateProductImages("Product_second") },
  { id: 6, name: "Product_third", images: generateProductImages("Product_third") },
  { id: 7, name: "Product_first", images: generateProductImages("Product_first") },
  { id: 8, name: "Product_second", images: generateProductImages("Product_second") },
  { id: 9, name: "Product_third", images: generateProductImages("Product_third") },
  { id: 10, name: "Product_first", images: generateProductImages("Product_first") },
];

const Home = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openFullscreen = (productIndex, imageIndex = 0) => {
    setCurrentProductIndex(productIndex);
    setCurrentImageIndex(imageIndex);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const goToNextImage = () => {
    if (currentProductIndex !== null) {
      const productImages = products[currentProductIndex].images;
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }
  };

  const goToPrevImage = () => {
    if (currentProductIndex !== null) {
      const productImages = products[currentProductIndex].images;
      setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="header-background">
        <div className="header-content">
          <h1 className="welcome-section">Zlatni Raki</h1>
          <p>Explore our beautifully crafted, hand-carved Christian icons.</p>
          <button className="scroll-button" onClick={() => document.getElementById("collection-section").scrollIntoView({ behavior: "smooth" })}>
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
          {products.map((product, productIndex) => (
            <ProductCard key={product.id} product={product} productIndex={productIndex} openFullscreen={openFullscreen} />
          ))}
        </div>
        <button className="order-button" onClick={() => (window.location.href = "/request-a-custom-icon")}>
          Request a Custom Icon
        </button>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && currentProductIndex !== null && (
        <div className="fullscreen-container">
          <button className="close-fullscreen" onClick={closeFullscreen}>✖</button>
          <button className="arrow prev-arrow" onClick={goToPrevImage}>◀</button>
          <img
            className="fullscreen-image"
            src={products[currentProductIndex].images[currentImageIndex]}
            alt={`Product ${currentProductIndex + 1} - Image ${currentImageIndex + 1}`}
          />
          <button className="arrow next-arrow" onClick={goToNextImage}>▶</button>
        </div>
      )}
    </div>
  );
};

export default Home;
