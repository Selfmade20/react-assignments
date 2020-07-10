import React, { Component } from 'react'
import './Bookings.css';
import { connect } from "react-redux";
import { addBooking } from '../redux/actions/bookings'
import Button from '@material-ui/core/Button';

const emailRegex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    return valid;
};

class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            selectedEvent: "",
            email: "",
            formErrors: {
                firstName: '',
                lastName: '',
                email: ''
            }
        };
    }

    addBooking = (event) => {
        event.preventDefault();
        // const { bookings } = this.props;
        const { firstName, lastName, selectedEvent, email } = this.state;

        if (formValid(this.state.formErrors)) {
            console.log(`
                ---SUBMITTING---    
                First Name: ${this.state.firstName},
                Last Name: ${this.state.lastName},
                Email: ${this.state.email}
            `);
        } else {
            console.error('FORM-INVALID');
        }

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
        event.preventDefault();
        const { name, value } = event.target
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 && value.lenth > 0
                    ? 'Minimum 3 characters required'
                    : "";
                break;
            case 'lastName':
                formErrors.lastName = value.length < 3 && value.lenth > 0
                    ? 'Minimum 3 characters required'
                    : "";
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) && value.lenth > 0
                    ? ''
                    : "invalid email address";
                break;
        }


        this.setState({
            [event.target.name]: event.target.value,
            formErrors, [name]: value
        })
    }

    render() {

        const { formErrors } = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Book Event</h1>
                    <form onSubmit={this.addBooking} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" required name="firstName" value={this.state.firstName} onChange={this.handleChange} noValidate placeholder="First Name" />
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" required name="lastName" value={this.state.lastName} onChange={this.handleChange} noValidate placeholder="Last Name" />
                        </div>
                        <div className="selectedEvent">
                            <label htmlFor="selectedEvent">Select Event</label>
                            <select name="selectedEvent" value={this.state.selectedEvent} onChange={this.handleChange}>
                                <option value="" disabled selected>Select your event</option>
                                <option>FIFA World Cup</option>
                                <option>Cape Town International Jazz Festival</option>
                                <option>Dance Umbrella</option>
                            </select>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" required name="email" value={this.state.email} onChange={this.handleChange} noValidate placeholder="Email" />
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