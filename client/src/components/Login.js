import React, { useState } from 'react'
import './Login.css';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Authenticate from './Authenticate';
import history from '../history/index';

function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = (props) => {
        Axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/login"
        }).then((res) => console.log(res));

        Authenticate.login(() => {
            history.push('/profile');
        });
        // window.location.reload();
    }

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Login</h1>
                <form noValidate>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input type="username" required name="username" onChange={(e) => setLoginUsername(e.target.value)} noValidate placeholder="Username" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" required name="password" onChange={(e) => setLoginPassword(e.target.value)} noValidate placeholder="Password" />
                    </div>
                    <div className="submit">
                        <Button variant="contained" color="primary" onClick={login}>Login</Button>
                        <small>Don't have an account yet?
                        <a href="http://localhost:3000/register" alt="register"> register</a>
                        </small>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;