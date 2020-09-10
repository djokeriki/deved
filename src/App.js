import React from 'react'
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Item from './ItemDetail';

function App() {
  return (
    <BrowserRouter>
  <div className="App">
    <Nav />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route exact path="/shop" component={Shop} />
    <Route path="/shop/:id" component={Item} />
    </Switch>
  </div>
    </BrowserRouter>
  )
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App
