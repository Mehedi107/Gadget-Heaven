import './App.css';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeaderSec from './components/HeaderSec';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <Header /> : <HeaderSec />}
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
