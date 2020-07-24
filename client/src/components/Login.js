import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialLogin = {
  username:'',
  password:''
}


const Login = () => {
  const [login, setLogin] = useState(initialLogin)
  const { push } = useHistory()


  const handleChange = e => {
    setLogin({...login, [e.target.name]:e.target.value})
  }
  const loginSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', login)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        push('/bubblepage')
      })
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
