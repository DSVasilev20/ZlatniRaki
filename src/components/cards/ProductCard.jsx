import "./ProductCard.css";
import PropTypes from "prop-types";

const ProductCard = ({ product, productIndex, openFullscreen }) => {
  return (
    <div className="product-card" onClick={() => openFullscreen(productIndex)}>
  <div className="product-content">
    <img
      className="product-image"
      src={product.images[0]}
      alt={product.title}
    />
    <h3 className="product-title">{product.title}</h3>
    <p className="product-price">${product.price}</p>
  </div>
</div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  productIndex: PropTypes.number.isRequired,
  openFullscreen: PropTypes.func.isRequired,
};

export default ProductCard;
