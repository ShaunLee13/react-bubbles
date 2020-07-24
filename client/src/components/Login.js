import React, { useState } from "react";
import axios from 'axios'

const initialLogin = {
  username:'',
  password:''
}


const Login = () => {
  const [login, setLogin] = useState(initialLogin)

  const handleChange = e => {
    setLogin({...login, [e.target.name]:e.target.value})
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const loginSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', login)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={loginSubmit}>
        <label>Username: &nbsp;
          <input 
          type='text'
          name='username'
          value={login.username}
          onChange={handleChange}
          />          
        </label>
        
        <label>Password: &nbsp;
          <input 
          type='password'
          name='password'
          value={login.password}
          onChange={handleChange}
          />          
        </label>

        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default Login;
