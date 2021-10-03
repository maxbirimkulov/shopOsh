import React,{useState} from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";


function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">

      <BrowserRouter>
        <Header cart={cart}/>
        <Switch>
          <Route exact path='/' component={()=> <Main cart={cart} setCart={setCart}/>}/>
          <Route exact path='/product/:id' component={()=> <Product/>}/>
          <Route exact path='/category/:name' component={()=> <Category/>}/>
          <Route exact path='/cart' component={()=> <Cart cart={cart} setCart={setCart}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
