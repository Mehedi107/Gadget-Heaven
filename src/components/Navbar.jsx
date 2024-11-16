import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Logo from '../assets/logo.png';
import LogoColored from '../assets/logo-colored.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  const location = useLocation();
  const { cartCount, cartTotal } = useCart();
  const { wishlist } = useWishlist(); // Get wishlist from context

  return (
    <div
      className={`${
        location.pathname === '/' ? 'bg-clrPrimary' : 'bg-clrWhite -mt-6 '
      }`}
    >
      <nav
        className={`navbar ${
          location.pathname === '/'
            ? 'text-white py-3 md:py-7'
            : 'text-clrPrimary py-2'
        } w-11/12 mx-auto`}
      >
        <div className="navbar-start">
          <Link
            to="/"
            className={`text-lg md:text-xl lg:text-2xl hidden lg:block font-semibold ${
              location.pathname === '/' ? 'text-white' : 'text-neutral'
            }`}
          >
            Gadget Heaven
          </Link>
          <Link to="/" className="w-9 md:w-14 lg:hidden">
            <img
              src={location.pathname === '/' ? Logo : LogoColored}
              alt="logo"
            />
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 text-sm md:text-base lg:text-lg hidden md:flex ">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end inline-flex">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-sm md:btn-lg btn-circle ${
                location.pathname === '/'
                  ? ''
                  : 'bg-clrWhite shadow-none border-clrWhite'
              }`}
            >
              <div className="indicator">
                <MdOutlineShoppingCart
                  className={`text-base md:text-lg ${
                    location.pathname === '/' ? '' : 'text-clrPrimary'
                  }`}
                />
                {cartCount > 0 && (
                  <span className="badge badge-sm indicator-item bg-purple-500 text-white">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-clrSecondary">
                  Total: ${cartTotal}
                </span>
                <div className="card-actions">
                  <Link to={`/dashboard`} className="w-full mt-5">
                    <button className="btn btn-block bg-transparent border-2 border-clrPrimary text-clrPrimary hover:text-white hover:bg-clrPrimary">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Wishlist Button */}
          <Link to="/dashboard">
            <div className="dropdown dropdown-end inline-flex ml-3">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-sm md:btn-lg btn-circle ${
                  location.pathname === '/'
                    ? ''
                    : 'bg-clrWhite border-clrWhite shadow-none'
                }`}
              >
                <div className="indicator">
                  <FaRegHeart
                    className={`text-base md:text-lg ${
                      location.pathname === '/' ? '' : 'text-clrPrimary'
                    }`}
                  />
                  {wishlist.length > 0 && (
                    <span className="badge badge-sm indicator-item bg-purple-500 text-white">
                      {wishlist.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>

          {/* Mobile menu */}
          <div className="dropdown md:hidden bg-transparent dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none focus:ring-0 focus:shadow-none shadow-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className={`inline-block h-5 w-5  ${
                  location.pathname === '/'
                    ? 'stroke-white'
                    : 'stroke-clrPrimary'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-clrSecondary"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
