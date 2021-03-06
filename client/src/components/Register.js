import React, { useState } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // const [loginUsername, setLoginUsername] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: "http://localhost:4000/register"
    }).then((res) => console.log(res));
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Register</h1>
        <form noValidate>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="username" required name="username" onChange={(e) => setRegisterUsername(e.target.value)} noValidate placeholder="Username" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" required name="password" onChange={(e) => setRegisterPassword(e.target.value)} noValidate placeholder="Password" />
          </div>
          <div className="submit">
            <Button variant="contained" color="primary" onClick={register}>Register</Button>
            <small>Already have an Account?
            <a href="http://localhost:3000/login" alt="register"> login</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;