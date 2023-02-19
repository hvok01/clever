import './App.css';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <NavBar />
      </header>
      <div>
        <ItemListContainer greetings={"Hola bienvienido!"}/>
      </div>
    </div>
  );
}

export default App;
