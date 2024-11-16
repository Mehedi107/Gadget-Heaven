import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import BannerBottom from './BannerBottom';

const Header = () => {
  return (
    <>
      <header className="bg-clrPrimary w-11/12 mx-auto rounded-xl overflow-hidden">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <BannerBottom></BannerBottom>
    </>
  );
};

export default Header;
