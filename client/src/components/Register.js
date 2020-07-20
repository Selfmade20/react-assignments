import React, { useState } from 'react'
import './Login.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'

function registerForm() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        axios({
            method: 'POST',
            data: {
               username: registerUsername,
               password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost/4000/register",
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
                        <input type="password" required name="password" noValidate placeholder="Password" />
                    </div>
                    <div className="submit">
                        <Button variant="contained" color="primary" onClick={() => this.register()}>Register</Button>
                    </div>
                    <small>Already have an Account <a href="/" alt="register"></a></small>
                </form>
            </div>
        </div>
    )
}

export default registerForm;