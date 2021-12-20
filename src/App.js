// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';
import Nosotros from './Components/Nosotros';
import { CartContextProvider } from './Components/CartContext';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
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
      </CartContextProvider>
    </div>
  );
}

export default App;
