import { createContext, useContext, useState, useMemo } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const hasProduct = cartItems.some(
      (product) => product.product_id === item.product_id
    );

    if (hasProduct) return toast.error('Already Added to Cart');

    setCartItems((prevItems) => [...prevItems, item]);
    toast.success('Added to Cart');
  };

  const removeFromCart = (itemId) => {
    toast.success('Product has removed form cart');
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== itemId)
    );
  };

  const clearCart = () => setCartItems([]);

  // Calculate cart count based on the number of items in cartItems
  const cartCount = useMemo(() => cartItems.length, [cartItems]);

  // Calculate cart total by summing up the prices of items in cartItems
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
