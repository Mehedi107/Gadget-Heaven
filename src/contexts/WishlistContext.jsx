import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const removeFromWishlist = (product_id) => {
    toast.success('Product has removed form wishlist!');
    setWishlist(
      (prevWishlist) =>
        prevWishlist.filter((item) => item.product_id !== product_id) // Match product_id
    );
  };

  const addToWishlist = (item) => {
    toast.success('Added to Wishlist !');
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
