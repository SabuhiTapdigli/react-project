import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap"
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';
import { showToast } from '../actions/toast';

class Login extends Component {
    state = {
        email: '',
        password: '',
        userType: ''
    };

    onFormControlChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = async e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
            userType: this.state.userType
        };

        const successfullyLogged = await this.props.loginUser(userData, this.props.history);
        if (successfullyLogged) {
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
        const { email, password } = this.state;

        const registerstyle = {
            width: "25%",
            margin: "auto",
            height: "85vh",
        }
        return (
            <div style={registerstyle}>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={this.onFormControlChange}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Form.Check
                        name="userType"
                        type="radio"
                        label="Driver"
                        value="driver"
                        onChange={this.onFormControlChange}
                    />

                    <Form.Check
                        name="userType"
                        type="radio"
                        label="Passenger"
                        value="client"
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
    loginUser,
    showToast
};

export default connect(null, mapDispatchToProps)(Login);