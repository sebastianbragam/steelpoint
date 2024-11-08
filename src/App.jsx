import './assets/styles/index.css';
import { BrowserRouter} from 'react-router-dom';
import CartProvider from './context/CartProvider';
import SideMenuProvider, { sideMenuContext } from './context/SideMenuProvider';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  return (

    <BrowserRouter >

      <SideMenuProvider >
        <CartProvider >

          <div className='flex flex-col h-screen items-center'>

            <NavBar />
            <Main />
            <Footer />

          </div>

        </CartProvider>
      </SideMenuProvider>

    </BrowserRouter>

  );

}

export default App;
