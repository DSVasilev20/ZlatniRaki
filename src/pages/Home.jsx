import { useState } from "react";
import "./Home.css";
import ProductCard from "../components/cards/ProductCard";

// Auto-import all images (png, jpg, jpeg)
const images = import.meta.glob("../assets/*.{png,jpg,jpeg}", { eager: true });

// Map images to a simpler format: { "filename.png": imagePath }
const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, module]) => [
    path.split("/").pop(),
    module.default,
  ])
);

// Define products with custom image filenames
const products = [
  {
    id: 1,
    title: "The Last Supper",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "available",
    price: "799.00",
  },
  {
    id: 2,
    title: "Saint Nicholas",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "sold",
    price: "799.00",
  },
  {
    id: 3,
    title: "Virgin Mary with Child",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "available",
    price: "799.00",
  },
  {
    id: 4,
    title: "The Ascension",
    images: [imageMap["realicon.jpg"]],
    status: "sold",
    price: "799.00",
  },
  {
    id: 5,
    title: "Saint George",
    images: [imageMap["realicon.jpg"]],
    status: "available",
    price: "799.00",
  },
  {
    id: 6,
    title: "Christ Pantocrator",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "sold",
    price: "799.00",
  },
  {
    id: 7,
    title: "Annunciation",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "available",
    price: "799.00",
  },
  {
    id: 8,
    title: "Saint John the Baptist",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "sold",
    price: "799.00",
  },
  {
    id: 9,
    title: "Holy Trinity",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "available",
    price: "799.00",
  },
  {
    id: 10,
    title: "Transfiguration",
    images: [imageMap["realicon.jpg"], imageMap["realicon.jpg"]],
    status: "sold",
    price: "799.00",
  },
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
      setCurrentImageIndex(
        (prev) => (prev - 1 + productImages.length) % productImages.length
      );
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="header-background">
        <div className="header-content">
          <h1 className="welcome-section">Zlatni Raki</h1>
          <p>Explore our beautifully crafted, hand-carved Christian icons.</p>
          <button
            className="scroll-button"
            onClick={() =>
              document
                .getElementById("collection-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            COLLECTION
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
          {products
            .slice()
            .sort((a, b) => (a.status === "sold") - (b.status === "sold")) // Move sold to bottom
            .map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                productIndex={index}
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
      {isFullscreen && currentProductIndex !== null && (
        <div className="fullscreen-container">
          <button className="close-fullscreen" onClick={closeFullscreen}>
            ✖
          </button>
          <button className="arrow prev-arrow" onClick={goToPrevImage}>
            ◀
          </button>
          <img
            className="fullscreen-image"
            src={products[currentProductIndex].images[currentImageIndex]}
            alt={`${products[currentProductIndex].title} - Image ${
              currentImageIndex + 1
            }`}
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
