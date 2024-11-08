import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { sideMenuContext } from '../../context/SideMenuProvider';

function Main() {

    const {visible} = useContext(sideMenuContext);

    return (

        <div className={visible ? 'flex-grow max-w-screen-xl flex flex-col w-full overflow-hidden' : 'flex-grow max-w-screen-xl flex flex-col w-full'}>

            <Routes>

                <Route path='/' element={<ItemListContainer greeting={"Bienvenidos"} />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos de la categoría "} />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h4 className='not-found'>{'404 not found: la página que buscas no existe :('}</h4>} />

            </Routes>

        </div>

    )

}

export default Main;