import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './Components/Cart';
import { Categoria } from './Components/Categoria';
import { CheckOut } from './Components/CheckOut';
import { DetailsProduct } from './Components/DetailsProduct';
import { Footer } from './Components/Footer';
import { ListOfProduct } from './Components/ListOfProduct';
import { Menu } from './Components/Menu';
import { CartProvider } from './context/CartContext';

function App() {

  console.log("render app")
  return (
    <div className="App">
      <CartProvider>

        <HashRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Categoria />}></Route>
            <Route path='/headphones' element={<ListOfProduct />} />
            <Route path='/speakers' element={<ListOfProduct />} />
            <Route path='/earphones' element={<ListOfProduct />} />
            <Route path='/detailsProduct/:productId' element={<DetailsProduct />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path="*" element={<h1>no found</h1>} />
          </Routes>
          <Footer/>
        </HashRouter>
      </CartProvider>
    </div>
  );
}

export default App;
