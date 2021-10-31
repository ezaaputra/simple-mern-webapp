import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './pages/products/Products'
import Home from './pages/home/Home'
import TopBar from './components/topBar/TopBar'

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/products"><Products /></Route>
      </Switch>
    </Router>
  );
}

export default App;
