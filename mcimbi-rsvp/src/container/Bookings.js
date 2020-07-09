import React, { Component } from 'react'
import './Bookings.css';
import Button from '@material-ui/core/Button';


class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            selectEvent: "",
            email: "",
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        console.log("final data is",data)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        })
    }



    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Book Event</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="" name="firstName" onChange={this.handleChange} noValidate placeholder="First Name" />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="" name="lastName" onChange={this.handleChange} noValidate placeholder="Last Name" />
                        </div>
                        <div className="selectEvent">
                            <label htmlFor="selectEvent">Select Event</label>
                            <select>
                                <option>FIFA World Cup</option>
                                <option>Cape Town International Jazz Festival</option>
                                <option>Dance Umbrella</option>
                            </select>
                            {/* <input type="text" className="" type="text" name="selectEvent" onChange={this.handleChange} noValidate placeholder="Select Event" /> */}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input className="" type="email" name="email" onChange={this.handleChange} noValidate placeholder="Email" />
                        </div>
                        <div className="submit">
                            <Button variant="contained" color="primary" type="submit" onClick={this.handleChange}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
}

export default Bookings