import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './App.scss';
import { getProducts } from './api/products';
import { Product } from './types/Product';
import { ProductType } from './types/ProductType';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      const productsFromServer = await getProducts();

      setProducts(productsFromServer);
    } catch {
      throw new Error('Loading Error');
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const phones = products.filter(product => product.type === ProductType.phone);

  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/phones" element={<PhonesPage phones={phones} />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
