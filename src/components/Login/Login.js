import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'

import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginSubmit = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((err) => console.warn(err))
  }

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((err) => console.warn(err))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={onLoginSubmit}>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__signinButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to Amaclone's Condition of Use & sale. Please
          see our Privacy Notice, our Cookie Notice and our Interst-Based Ads
          Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amaclone Account
        </button>
      </div>
    </div>
  )
}

export default Login
