import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter as Shivam } from 'react-router-dom';
import ProductProvider from './Context/ProductContext';
import FilterProvider from './Context/FilterProvider';
import CartProvider from './Context/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


   <CartProvider>
    <ProductProvider>
      <FilterProvider>
    <Shivam>
    <App />
    </Shivam>
    </FilterProvider>
    </ProductProvider>
    </CartProvider>
);

reportWebVitals();
