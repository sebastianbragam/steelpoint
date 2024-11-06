import './assets/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

function App() {

  return (

    <BrowserRouter >

      <CartProvider >

        <div className='flex flex-col h-screen items-center'>

          <NavBar />

          <div className='flex-grow max-w-screen-xl flex flex-col w-full'>

            <Routes>

              <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos de la categoría "} />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h4 className='not-found'>{'404 not found: la página que buscas no existe :('}</h4>} />

            </Routes>

          </div>

          <Footer />

        </div>

      </CartProvider>

    </BrowserRouter>

  );

}

export default App;
