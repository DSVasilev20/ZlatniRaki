import "./ProductCard.css";
import PropTypes from "prop-types";

const ProductCard = ({ product, productIndex, openFullscreen }) => {
  return (
    <div className="icon-card" onClick={() => openFullscreen(productIndex)}>
      <span className="click-to-explore">Click to Explore</span>
      <img src={product.images[0]} alt={`Product ${productIndex + 1}`} />
      <p>Product {productIndex + 1}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  productIndex: PropTypes.number.isRequired,
  openFullscreen: PropTypes.func.isRequired,
};

export default ProductCard;