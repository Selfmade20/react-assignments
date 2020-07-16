import React, { Component } from 'react'
import './Login.css';
import { PostData } from '../redux/actions/index';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",

        }
    }

    logIn = () => {
        PostData('users', this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON); 
        });
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Log In</h1>
                    <form noValidate>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" required name="email" onChange={this.onChange} noValidate placeholder="Email" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" required name="password" onChange={this.onChange} noValidate placeholder="Password" />
                        </div>
                        <div className="submit">
                            <Button variant="contained" color="primary" onClick={this.logIn} >Log In</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
