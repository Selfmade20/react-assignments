import React, { Component } from 'react'
import './Bookings.css';
import { connect } from "react-redux";
import { addBooking } from '../redux/actions/bookings'
import Button from '@material-ui/core/Button';


class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            selectedEvent: "",
            email: "",
        }
    }

    addBooking = (event) => {
        event.preventDefault();
        // const { bookings } = this.props;
        const { firstName, lastName, selectedEvent, email } = this.state;

        this.props.addBooking({
            firstName,
            lastName,
            selectedEvent,
            email
        })
        this.setState({
            firstName: "",
            lastName: "",
            selectedEvent: "",
            email: "",
        })
        console.log("final data is", this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Book Event</h1>
                    <form onSubmit={this.addBooking} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="" name="firstName" value={this.state.firstName} onChange={this.handleChange} noValidate placeholder="First Name" />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="" name="lastName" value={this.state.lastName} onChange={this.handleChange} noValidate placeholder="Last Name" />
                        </div>
                        <div className="selectedEvent">
                            <label htmlFor="selectedEvent">Select Event</label>
                            <select name="selectedEvent" onChange={this.handleChange}>
                                <option>FIFA World Cup</option>
                                <option>Cape Town International Jazz Festival</option>
                                <option>Dance Umbrella</option>
                            </select>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input className="" type="email" name="email" value={this.state.email} onChange={this.handleChange} noValidate placeholder="Email" />
                        </div>
                        <div className="submit">
                            <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    bookings: state.bookings.bookings
});

const mapDispatchToProps = dispatch => ({
    addBooking: (booking) => dispatch(addBooking(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);