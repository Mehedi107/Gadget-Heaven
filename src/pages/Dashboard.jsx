import { useState } from 'react';
import Cart from '../components/Cart';
import WishList from '../components/WishList';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('cart');
  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div className="py-14 bg-clrPrimary text-center text-clrWhite">
        <div className="w-11/12 mx-auto">
          <h3 className="text-4xl font-bold">Dashboard</h3>
          <p className="text-sm md:text-base lg:text-lg my-5 max-w-4xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center items-center gap-5 mt-10">
            <button
              onClick={() => setActiveSection('cart')}
              className={`rounded-full btn-md lg:btn-lg btn hover:bg-white hover:text-clrPrimary lg:btn-wide active:text-clrPrimary ${
                activeSection === 'cart'
                  ? 'bg-white text-clrPrimary'
                  : 'bg-transparent text-white'
              }`}
            >
              Cart
            </button>
            <button
              onClick={() => setActiveSection('wishlist')}
              className={`rounded-full btn-md lg:btn-lg btn hover:bg-white hover:text-clrPrimary lg:btn-wide active:text-clrPrimary ${
                activeSection === 'wishlist'
                  ? 'bg-white text-clrPrimary'
                  : 'bg-transparent text-white'
              }`}
            >
              Wish List
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally render either Cart or Wishlist products */}
      <div className="bg-clrWhite">
        <div className="w-11/12 mx-auto py-10 pb-20 ">
          {activeSection === 'cart' && <Cart></Cart>}
          {activeSection === 'wishlist' && <WishList></WishList>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
