// import logo from './logo.svg';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting="My Store"/> */}
      <ItemDetailContainer idItem={3}/>
    </div>
  );
}

export default App;
