import { Helmet } from 'react-helmet-async';
import ProductAll from '../components/ProductAll';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <ProductAll />
    </>
  );
};

export default Home;
