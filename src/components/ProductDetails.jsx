import { FaRegHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom';
import StarRating from '../Utils/StarRating';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
const ProductDetails = () => {
  const { addToCart } = useCart();
  const { addToWishlist, wishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const { bookId } = useParams();
  const productAll = useLoaderData();
  const product = productAll.find((p) => p.product_id === +bookId);
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  // Check if the product is already in the wishlist
  const isInWishlist = wishlist.some(
    (item) => item.product_id === product.product_id
  );

  return (
    <div className="">
      <div className="py-14 bg-clrPrimary text-center text-clrWhite">
        <h3 className="text-4xl font-bold ">Product Details</h3>
        <p className="text-sm md:text-base lg:text-lg my-5 mb-20 max-w-4xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {/* Product Card Details */}
      <div className="bg-white rounded-lg -mt-24 grid grid-cols-3 gap-10 max-w-6xl mx-auto p-5 bd-white shadow-xl mb-24">
        <div className="col-span-3 md:col-span-1">
          <img
            src={product_image}
            alt={product_title}
            className="h-full object-cover rounded-lg mx-auto"
          />
        </div>
        <div className="md:col-span-2 col-span-3">
          <h4 className="lg:text-3xl md:text-2xl text-xl font-semibold">
            {product_title}
          </h4>
          <p className="text-base md:text-lg lg:text-xl font-semibold my-3 text-clrAccent">
            Price: {`$${price}`}
          </p>
          <span
            className={`inline-block py-2 px-8 border-2 border-green-300 bg-green-100 text-green-500 rounded-full text-xs md:text-sm lg:text-base ${
              availability
                ? 'border-green-300 bg-green-100 text-green-500'
                : 'border-red-300 bg-red-100 text-red-500'
            }`}
          >
            {availability ? 'In Stock' : 'Out of Stock'}
          </span>
          <p className="text-sm md:text-base lg:text-lg my-3">{description}</p>
          <p className="text-base md:text-lg lg:text-xl font-semibold mb-2">
            Specification:
          </p>
          <ol className="list-decimal ml-4">
            {specification.map((item, i) => (
              <li key={i} className="text-sm md:text-base lg:text-lg">
                {item}
              </li>
            ))}
          </ol>
          <p className="text-sm md:text-base lg:text-lg font-semibold mb-2 mt-5">
            Rating
          </p>
          <div className="rating rating-md">
            <StarRating rating={rating} />
            <span className="inline-block ml-5 py-1 px-3 rounded-full bg-slate-100">
              {rating}
            </span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn lg:btn-lg bg-clrPrimary hover:bg-purple-500 text-white rounded-full"
            >
              Add to cart <FaCartShopping />
            </button>

            {/* Add to Wishlist Button */}
            <button
              onClick={handleAddToWishlist}
              disabled={isInWishlist} // Disable button if product is already in wishlist
              className={`btn lg:btn-lg text-clrPrimary rounded-full border border-clrPrimary ${
                isInWishlist ? 'bg-clrPrimary text-white' : 'bg-transparent'
              }`}
            >
              {isInWishlist ? 'Added' : 'Add to Wishlist'}
              <FaRegHeart
                className={`${isInWishlist ? 'text-white' : 'text-clrPrimary'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
