import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className="text-center text-white w-11/12 mx-auto  pt-20 pb-80 md:pb-96">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-sm md:text-base lg:text-lg my-5 max-w-4xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to="/dashboard">
          <button className=" btn lg:btn-lg rounded-full px-10 lg:px-14 text-clrPrimary mb-10">
            Shop Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Banner;
