import { Link } from 'react-router-dom';
import about_img from '../assets/about.webp';
import teamImg1 from '../assets/person_1.webp';
import teamImg2 from '../assets/person_2.webp';
import teamImg3 from '../assets/person_3.webp';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Gadget Heaven</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-clrPrimary">About Us</h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-4">
            We are passionate about providing the best gadgets and technology
            products.
          </p>
        </div>

        {/* Company Overview */}
        <div className="lg:flex justify-between items-center mb-12 gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold text-clrPrimary mb-4">
              Who We Are
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4">
              At Gadget Heaven, we are a team of tech enthusiasts dedicated to
              bringing you the latest and most innovative gadgets from around
              the world. Our mission is to provide high-quality products that
              enhance your life and keep you connected with the ever-evolving
              tech landscape.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              We strive to offer a seamless online shopping experience with a
              wide range of gadgets from smartphones to smart home devices. With
              fast shipping, secure payment methods, and exceptional customer
              service, we are here to provide you with a one-stop solution for
              all your tech needs.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={about_img}
              alt="Company image"
              className="rounded-lg shadow-lg w-full aspect-square object-cover"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-gray-100 py-12 md:px-8 px-4 lg:px-10 mb-12 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-clrPrimary">
              Our Values
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-4">
              We are committed to providing the best quality gadgets, customer
              service, and a seamless shopping experience. Here are the values
              we stand by:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-clrPrimary mb-4">
                Quality Products
              </h3>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                We carefully select and offer high-quality products that meet
                the needs of our customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-clrPrimary mb-4">
                Customer First
              </h3>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                Our customers are at the heart of everything we do. We
                prioritize customer satisfaction and support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-clrPrimary mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                We stay ahead of the curve by offering the latest and most
                innovative gadgets in the tech world.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-clrPrimary mb-4">
            Meet The Team
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8">
            Our team is passionate about bringing you the best gadgets and
            providing exceptional customer service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src={teamImg1}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600 ">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src={teamImg2}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src={teamImg3}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Alice Johnson
              </h3>
              <p className="text-gray-600">Product Specialist</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-clrPrimary mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 ">
            Stay connected with us for the latest gadgets, updates, and offers.
            We are excited to help you find the perfect gadget for your needs.
          </p>
          <Link
            to="/"
            className="btn bg-clrPrimary  text-white py-3 px-6 rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
