const Footer = () => {
  return (
    <>
      <div className="text-center bg-white pt-12 w-11/12 mx-auto">
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
          Gadget Heaven
        </h3>
        <p className="text-sm md:text-base lg:text-lg pb-12 border-b">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10  bg-white gap-8">
        <nav className="flex flex-col ">
          <h6 className="footer-title">Product Support</h6>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Order Tracking
          </a>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Shipping & Delivery
          </a>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Returns
          </a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            About Us
          </a>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Careers
          </a>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Contact
          </a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Terms of use
          </a>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Privacy policy
          </a>
          <a className="link link-hover text-sm md:text-base lg:text-lg">
            Cookie policy
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
