import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

const Login = () => {
  const onLoginSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form onSubmit={onLoginSubmit}>
          <h5>Email</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signinButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to Amaclone's Condition of Use & sale. Please
          see our Privacy Notice, our Cookie Notice and our Interst-Based Ads
          Notice.
        </p>

        <button className='login__registerButton'>
          Create your Amaclone Account
        </button>
      </div>
    </div>
  )
}

export default Login
