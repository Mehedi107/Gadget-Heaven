import Product from './Product';
import { useEffect, useState } from 'react';

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    // Fetch products data
    fetch('products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      });
  }, []);

  const btnCategory = (e) => {
    const category = e.target.dataset.category;
    setActiveCategory(category); // Set the clicked category as active

    if (category === 'all-product') {
      setFilteredProducts(products);
    } else {
      // Filter products by selected category
      const selectedCategory = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(selectedCategory);
    }
  };

  return (
    <div className="bg-clrWhite">
      <div className="max-w-7xl mx-auto py-20 w-11/12 ">
        <h2 className="text-clrPrimary font-bold text-4xl text-center mb-12">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-gray-700 text-center font-semibold lg:text-2xl md:text-xl text-lg mb-5">
              Choose by Category
            </h3>
            <ul className="menu rounded-lg shadow-lg bg-white text-sm md:text-base lg:text-lg p-5">
              <li>
                <a
                  className={`hover:bg-purple-600 hover:text-white ${
                    activeCategory === 'all-product' ? 'active-category' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    btnCategory(e);
                  }}
                  data-category="all-product"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  className={`hover:bg-purple-600 hover:text-white ${
                    activeCategory === 'laptops' ? 'active-category' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    btnCategory(e);
                  }}
                  data-category="laptops"
                >
                  Laptops
                </a>
              </li>
              <li>
                <a
                  className={`hover:bg-purple-600 hover:text-white ${
                    activeCategory === 'phones' ? 'active-category' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    btnCategory(e);
                  }}
                  data-category="phones"
                >
                  Phones
                </a>
              </li>
              <li>
                <a
                  className={`hover:bg-purple-600 hover:text-white ${
                    activeCategory === 'accessories' ? 'active-category' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    btnCategory(e);
                  }}
                  data-category="accessories"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  className={`hover:bg-purple-600 hover:text-white ${
                    activeCategory === 'smartWatches' ? 'active-category' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    btnCategory(e);
                  }}
                  data-category="smartWatches"
                >
                  Smart Watches
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-2 col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product) => (
              <Product key={product.product_id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAll;
