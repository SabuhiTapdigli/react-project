import React, {Component, Fragment} from 'react';
import {Form,Col,Button} from "react-bootstrap"
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { showToast } from '../actions/toast';

class Register extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        gender: '',
        phoneNum: '',
        userType: '',
        vehicle: '',
        seats: ''
    };

    onFormControlChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = async e => {
        e.preventDefault();

        const userData = {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            phoneNum: this.state.phoneNum,
            userType: this.state.userType,
        };

        if (this.state.userType === 'driver') {
            userData.vehicle = this.state.vehicle;
            userData.seats = this.state.seats;
        }

        const successfullyRegistered = await this.props.registerUser(userData, this.props.history);

        if (successfullyRegistered) {
            this.props.history.push('/home');
        } else {
            this.props.showToast({
                headerText: 'Fail',
                bodyText: 'Something went wrong. Please try again',
                delay: 2000
            });
        }
    };

    render() {
        const { name, surname, email, password, phoneNum, userType, vehicle, seats } = this.state;

        const registerstyle={
            width:"25%",
            margin: "auto",
            height:"85vh"

        }
        return (
            <div style={registerstyle}>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Label>Registration Form</Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                name="name"
                                placeholder="First name"
                                value={name}
                                onChange={this.onFormControlChange}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                name="surname"
                                placeholder="Last name"
                                value={surname}
                                onChange={this.onFormControlChange}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Form.Check
                        type="radio"
                        name="userType"
                        label="Driver"
                        value="driver"
                        onChange={this.onFormControlChange}
                    />
                    <Form.Check
                        type="radio"
                        name="userType"
                        label="Passenger"
                        value="client"
                        onChange={this.onFormControlChange}
                    />
                    {
                        userType === 'driver' ? (
                            <Fragment>
                                <Form.Group>
                                    <Form.Label>Vehicle</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="vehicle"
                                        placeholder="Vehicle"
                                        value={vehicle}
                                        onChange={this.onFormControlChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Seats</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="seats"
                                        placeholder="Seats"
                                        value={seats}
                                        onChange={this.onFormControlChange}
                                    />
                                </Form.Group>
                            </Fragment>
                        ) : null
                    }
                     <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phoneNum"
                            placeholder="Phone Number"
                            value={phoneNum}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Form.Check
                        type="radio"
                        name="gender"
                        label="Male"
                        value="male"
                        onChange={this.onFormControlChange}
                    />
                    <Form.Check
                        type="radio"
                        name="gender"
                        label="Female"
                        value="female"
                        onChange={this.onFormControlChange}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    registerUser,
    showToast
};

export default connect(null, mapDispatchToProps)(Register);