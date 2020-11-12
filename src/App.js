import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider/StateProvider'
import './App.css'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import { auth } from './firebase'

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is: ', authUser)
      if (authUser) {
        // user just logged in
        dispatch({
          type: 'SET_USER',
          payload: authUser,
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          payload: null,
        })
      }
    })
  }, [])

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
