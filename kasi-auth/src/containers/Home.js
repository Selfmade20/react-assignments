import React, { Component } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';


class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a className="button" href="http://localhost:3000/logIn"><Button variant="contained" color="primary" type="submit">Log In</Button></a>
            </div>
        )
    }
}

export default Home