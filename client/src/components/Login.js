import React, { Component } from 'react'
import './Login.css';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",

        }
    }

    logIn = () => {
        this.setState({
            username: '',
            password: ''
        })
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
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input type="username" required name="username" onChange={this.onChange} noValidate placeholder="Username" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" required name="password" onChange={this.onChange} noValidate placeholder="Password" />
                        </div>
                        <div className="submit">
                            <Button variant="contained" color="primary">Log In</Button>
                        </div>
                          <small>Already have an Account</small>
                    </form>
                </div>
            </div>
        )
    }
}