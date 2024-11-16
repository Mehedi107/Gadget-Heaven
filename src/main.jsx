import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext.jsx';
import { WishlistProvider } from './contexts/WishlistContext.jsx';
import { Toaster } from 'react-hot-toast';
import router from './routes/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </CartProvider>
    </WishlistProvider>
    <Toaster />
  </StrictMode>
);
