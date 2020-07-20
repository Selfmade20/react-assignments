import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="homepage">
                    <div class="message">
                        <div class="word1">close</div>
                        <div class="word2">code</div>
                        <div class="word3">creating</div>
                    </div>
                    <div className="description">
                        <p>Kasi Auth is the kasi's most key platform to get access to the latest news</p>
                        <a href="http://localhost:3000/logIn"><button>Login</button></a>
                    </div>
                </h1>
            </div>
        )
    }
}
