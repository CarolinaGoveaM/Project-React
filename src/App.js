// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import { CartContextProvider } from './Components/Context/CartContext';


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

          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
