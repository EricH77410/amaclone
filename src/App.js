import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/' exact>
            <Header />
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
