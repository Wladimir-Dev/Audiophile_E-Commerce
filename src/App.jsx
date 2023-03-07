import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './Components/Cart';
import { Categoria } from './Components/Categoria';
import { CheckOut } from './Components/CheckOut';
import { DetailsProduct } from './Components/DetailsProduct';
import { ListOfProduct } from './Components/ListOfProduct';
import { CartProvider } from './context/CartContext';

function App() {

  console.log("render app")
  return (
    <div className="App">
      <CartProvider>

        <HashRouter>
          <Cart />
          <Routes>
            <Route path='/' element={<Categoria />}></Route>
            <Route path='/headphones' element={<ListOfProduct />} />
            <Route path='/speakers' element={<ListOfProduct />} />
            <Route path='/earphones' element={<ListOfProduct />} />
            <Route path='/detailsProduct/:productId' element={<DetailsProduct />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path="*" element={<h1>no found</h1>} />
          </Routes>

        </HashRouter>
      </CartProvider>
    </div>
  );
}

export default App;
