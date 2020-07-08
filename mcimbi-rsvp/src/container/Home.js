import React, { Component } from 'react'
import './Home.css'
import Button from '@material-ui/core/Button';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayWorldCup: false,
            isDisplayCapeTown: false,
            isDisplayDanceUmbrella: false,
        }
    }

    toggleWorldCup = () => {
        this.setState({
            isDisplayWorldCup: !this.state.isDisplayWorldCup
        })

    }

    toggleCapeTown = () => {
        this.setState({
            isDisplayCapeTown: !this.state.isDisplayCapeTown
        })

    }

    toggleDanceUmbrella = () => {
        this.setState({
            isDisplayDanceUmbrella: !this.state.isDisplayDanceUmbrella
        })

    }

    render() {
        const worldCupEvent = [
            {
                id: 1,
                name: "FIFA World Cup",
                desciption: "The World Cup refers to an international football tournament played between the senior men's national teams from countries that are members of the tournament's governing body, the Fédération Internationale de Football Association(FIFA)",
                date: "27 July 2022"
            },
        ];

        const worldCupResults = worldCupEvent.map(event => {
            return event.desciption
        });

        const capeTownEvent = [
            {
                id: 2,
                name: "Cape Town International Jazz Festival",
                description: "Affectionately referred to as “Africa's Grandest Gathering”, the Cape Town International Jazz Festival (CTIJF) is the largest music event in sub-Saharan Africa. The festival is famous for its star-studded line up of local and international artists."
            }
        ];
        const capeTownResults = capeTownEvent.map(event => {
            return event.description  
        });


        const danceUmbrella = [
            {
                id: 3,
                name: "",
                description: "Dance Umbrella is London's international dance festival, celebrating 21st century choreography across the capital. Founded in 1978, Dance Umbrella is internationally recognised for its annual festival which takes place each October."
            }
        ];
        const danceUmbrellaResults = danceUmbrella.map(event => {
            return event.description
        });

        return (
            <div>
                <h1 className="header">Active Events</h1>
                <div className="container">
                    <div className="grid-1">
                        <h3>FIFA World Cup</h3>
                        <ul>
                            {this.state.isDisplayWorldCup ? worldCupResults : null}
                        </ul>
                        <Button variant="contained" color="primary" onClick={() => this.toggleWorldCup()}>Show Info</Button>
                    </div>
                    <div className="grid-2">
                        <h3>Cape Town International Jazz Festival</h3>
                        <ul>
                            {this.state.isDisplayCapeTown ? capeTownResults : null}
                        </ul>
                        <Button variant="contained" color="primary" onClick={() => this.toggleCapeTown()}>Show Info</Button>
                    </div>
                    <div className="grid-3">
                        <h3>Dance Umbrella</h3>
                        <ul>
                            {this.state.isDisplayDanceUmbrella ? danceUmbrellaResults : null}
                        </ul>
                        <Button variant="contained" color="primary" onClick={() => this.toggleDanceUmbrella()}>Show Info</Button>
                    </div>
                </div>
                <div className="book-event">
                <Button variant="contained" color="primary" size="large">Buy Ticket</Button>
                </div>
            </div>
        )
    }
}

export default Home