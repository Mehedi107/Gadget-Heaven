import { IoIosCloseCircleOutline } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext'; // Importing useCart

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart(); // Accessing addToCart from CartContext

  const handleAddToCart = (item) => {
    addToCart(item); // Adding the item to the cart
    console.log(item.product_id); // Debugging to check if correct item is added
  };

  const handleRemoveFromWishlist = (productId) => {
    console.log(productId); // Debugging to check if correct productId is passed
    removeFromWishlist(productId); // Removing product from wishlist using product_id
  };

  return (
    <div>
      {/* Product Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-5">
          Wishlist
        </h3>
      </div>

      {/* Product Cards */}
      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <div
            key={item.product_id}
            className="p-5 bg-white shadow-xl rounded-lg overflow-hidden flex justify-between gap-5 mb-5"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <img
                src={item.product_image}
                alt={item.product_title}
                className="w-20 md:w-40 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  {item.product_title}
                </h3>
                <p className="lg:text-lg md:text-base text-sm text-clrAccent my-3">
                  {item.description}
                </p>
                <p className="lg:text-xl md:text-lg text-base font-semibold">
                  ${item.price}
                </p>
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item)} // Add product to cart when clicked
                  className="btn lg:btn-lg md:btn-md btn-sm bg-clrPrimary hover:bg-purple-500 text-white rounded-full mt-5"
                >
                  Add to cart <FaRegHeart />
                </button>
              </div>
            </div>
            <div>
              <button onClick={() => handleRemoveFromWishlist(item.product_id)}>
                <IoIosCloseCircleOutline className="lg:text-3xl md:text-2xl text-xl text-red-600" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishList;
