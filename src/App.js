import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './Context/CartContext';
import CheckOut from './Components/CheckOut/CheckOut';
import NotFound from './Pages/404';
import Thanks from './Components/Thanks/Thanks';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <header className='Header'>
          <NavBar />
        </header>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/all' element={<ItemListContainer />}/>
          <Route exact path='/collections/:id' element={<ItemListContainer />}/>
          <Route exact path='/product/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/checkout' element={<CheckOut />}/>
          <Route exact path='/thanks' element={<Thanks />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
