import './assets/styles/App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {

  return (

    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos de la categoría "} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h4 className='not-found'>{'404 not found: la página que buscas no existe :('}</h4>} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;
