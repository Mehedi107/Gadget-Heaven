import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useCart } from '../contexts/CartContext';
import { FaSort } from 'react-icons/fa';
import modalImg from '../assets/Group.png';

const Cart = () => {
  const [activeBtn, setActiveBtn] = useState('purchase');
  const [sortedItems, setSortedItems] = useState(null);
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Handle sorting by price
  const handleSort = () => {
    setActiveBtn('sort');
    if (sortedItems) {
      // Toggle between sorted and original order
      setSortedItems(null);
    } else {
      const sorted = [...cartItems].sort((a, b) => b.price - a.price); // Sort descending by price
      setSortedItems(sorted);
    }
  };

  // Handle purchase
  const purchase = () => {
    document.getElementById('my_modal_1').showModal();
    setActiveBtn('purchase');
  };

  // Use sortedItems if available, otherwise fallback to cartItems
  const itemsToDisplay = sortedItems || cartItems;

  return (
    <>
      {/* Product Header */}
      <div className="flex md:flex-row flex-col gap-5 justify-between items-center mb-10">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold">Cart</h3>
        <div className="flex justify-end gap-4 lg:gap-7 items-center">
          <h3 className="text-base md:text-xl lg:text-2xl font-bold">
            Total cost: ${totalPrice.toFixed(2)}
          </h3>
          <button
            onClick={handleSort}
            className={`btn-md lg:btn-lg btn rounded-full hover:bg-clrPrimary hover:text-white ${
              activeBtn === 'sort'
                ? 'bg-clrPrimary text-white'
                : 'bg-transparent border-2 border-clrPrimary text-clrPrimary'
            }`}
          >
            Sort by Price
            <FaSort />
          </button>
          <button
            onClick={purchase}
            className={`btn-md lg:btn-lg btn rounded-full hover:bg-clrPrimary hover:text-white ${
              activeBtn === 'purchase'
                ? 'bg-clrPrimary text-white'
                : 'bg-transparent border-2 border-clrPrimary text-clrPrimary'
            }`}
          >
            Purchase
          </button>
          {/* ======== Modal ======== */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box text-center pt-10">
              <img src={modalImg} alt="purchase image" className="mx-auto" />
              <h3 className="font-bold text-lg mt-5">Payment successfully !</h3>
              <div className="divider"></div>
              <p className="">Thanks for purchasing</p>
              <p className="">Total: ${totalPrice.toFixed(2)}</p>
              <div className="modal-action justify-center">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={clearCart}
                    className="btn btn-wide bg-clrPrimary text-white hover:bg-clrPrimary"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          {/* =================================== */}
        </div>
      </div>

      {/* Product Cards */}
      {itemsToDisplay.map((item) => (
        <div
          key={item.product_id}
          className="p-5 bg-white shadow-xl rounded-lg overflow-hidden flex justify-between gap-5 mb-5"
        >
          <div className="flex justify-start items-center gap-3 md:gap-5">
            <img
              src={item.product_image}
              alt="product image"
              className="w-20 md:w-40 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {item.product_title}
              </h3>
              <p className="lg:text-lg md:text-base text-sm">
                {item.description}
              </p>
              <p className="lg:text-xl md:text-lg text-base font-semibold">
                ${item.price}
              </p>
            </div>
          </div>
          <div>
            <button onClick={() => removeFromCart(item.product_id)}>
              <IoIosCloseCircleOutline className="lg:text-3xl md:text-2xl text-xl text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
