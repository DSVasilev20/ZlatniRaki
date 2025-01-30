import React from "react";
import "../../App.css";
import PropTypes from "prop-types";

const ProductCard = ({ image, index, openFullscreen }) => {
  return (
    <div className="icon-card" onClick={() => openFullscreen(index)}>
      <img src={image} alt={`Icon ${index + 1}`} />
      <p>Icon {index + 1}</p>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired, // Added prop validation
  index: PropTypes.number.isRequired,
  openFullscreen: PropTypes.func.isRequired,
};

export default ProductCard;
