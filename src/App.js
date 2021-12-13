// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';
import Nosotros from './Components/Nosotros';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>

          <Route path= "/" exact>
            <ItemListContainer greeting="My Store"/>
          </Route>

          <Route path= "/category/:categoryId">
            <ItemListContainer greeting="Categorías"/>
          </Route>

          <Route path= "/product/:id">
            <ItemDetailContainer/>
          </Route>

          <Route path= "/cart">
            <Cart/>
          </Route>

          <Route path= "/nosotros">
            <Nosotros/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
