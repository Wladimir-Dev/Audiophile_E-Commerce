import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CategoryProduct } from './Components/CategoryProduct';
import { CheckOut } from './Components/CheckOut';
import { DetailsProduct } from './Components/DetailsProduct';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
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
            <Route path='/' element={<Home />}></Route>
            <Route path='/headphones' element={<CategoryProduct />} />
            <Route path='/speakers' element={<CategoryProduct />} />
            <Route path='/earphones' element={<CategoryProduct />} />
            <Route path='/detailsProduct/:slug' element={<DetailsProduct />} />
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
