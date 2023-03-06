import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Categoria } from './Components/Categoria';
import { DetailsProduct } from './Components/DetailsProduct';
import { ListOfProduct } from './Components/ListOfProduct';

function App() {

  const [cart, setCart] = useState([]);
  console.log("render app")
  return (
    <div className="App">
      <HashRouter>

        <Routes>
          <Route path='/' element={<Categoria />}></Route>
          <Route path='/headphones' element={<ListOfProduct />} />
          <Route path='/speakers' element={<ListOfProduct />} />
          <Route path='/earphones' element={<ListOfProduct />} />
          <Route path='/detailsProduct/:productId' element={<DetailsProduct cart={cart} setCart={setCart}/>} />
          <Route path="*" element={<h1>no found</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
