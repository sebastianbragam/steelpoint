import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (

    <>

      <NavBar />
      <ItemListContainer greeting={'Bienvenido. Sitio en mantenimiento. Disculpe las molestias.'} />

    </>

  );

}

export default App;
