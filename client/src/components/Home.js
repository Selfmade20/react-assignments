import React, { Component } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';

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
                        <button>Login</button>
                    </div>
                </h1>
            </div>
        )
    }
}
