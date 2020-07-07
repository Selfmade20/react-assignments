import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = []

    }


    data = () => {
        const data = [
            {
                name: "fifa world cup"
            }
        ]
    }

    render() {
        return (
            <div>
                <h1 className="header">Events</h1>
                <div className="container">
                    <div className="grid-1">
                        <h3>FIFA World Cup</h3>
                        <p>The World Cup refers to an international football tournament played between the senior men's national teams from countries that are members of the tournament's governing body, the Fédération Internationale de Football Association (FIFA)</p>
                    </div>
                    <div className="grid-2">
                        <h3>Cape Town International Jazz Festival</h3>
                        <p>Affectionately referred to as “Africa's Grandest Gathering”, the Cape Town International Jazz Festival (CTIJF) is the largest music event in sub-Saharan Africa. The festival is famous for its star-studded line up of local and international artists.</p>
                    </div>
                    <div className="grid-3">
                        <h3>Dance Umbrella</h3>
                        <p>Dance Umbrella is London's international dance festival, celebrating 21st century choreography across the capital. Founded in 1978, Dance Umbrella is internationally recognised for its annual festival which takes place each October and it aspires to be a hub for choreographic development, programming and debate.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home