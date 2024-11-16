import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg">
      <figure className="px-5 pt-5">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="rounded-md"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.product_title}</h2>
        <p>Price: ${product.price}</p>
        <div className="card-actions justify-start">
          <Link to={`/product-details/${product.product_id}`}>
            <button className="btn btn-md bg-clrPrimary hover:bg-purple-700 text-white rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  viewDetails: PropTypes.func,
};

export default Product;
