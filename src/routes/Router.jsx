import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import ProductDetails from '../components/ProductDetails.jsx';
import Home from '../pages/Home.jsx';
import Statistics from '../pages/Statistics.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import About from '../pages/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/product-details/:bookId',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch(`../products.json`),
      },
    ],
  },
]);

export default router;
