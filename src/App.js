import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
