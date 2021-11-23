// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="My Store"/>
    </div>
  );
}

export default App;
