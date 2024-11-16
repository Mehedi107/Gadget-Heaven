import banner from '../assets/banner.webp';

const BannerBottom = () => {
  return (
    <div className="md:p-5 p-4 rounded-xl bg-white max-w-6xl w-10/12 md:w-9/12 mx-auto -mt-80">
      <img
        src={banner}
        alt="Banner image"
        className="rounded-lg w-full lg:h-[600px] md:h-[400px] h-[200px] object-cover"
      />
    </div>
  );
};

export default BannerBottom;
