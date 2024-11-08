import './assets/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import SideMenuProvider from './context/SideMenuProvider';
import Main from './components/Main';
import SideMenu from './components/NavBar/SideMenu/SideMenu';

function App() {

  return (

    <BrowserRouter >

      <SideMenuProvider >
        <CartProvider >

          <Main />
          <SideMenu />

        </CartProvider>
      </SideMenuProvider>

    </BrowserRouter>

  );

}

export default App;
