import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

class Navi extends Component {
    logoutUser = () => {
        this.props.logoutUser();
    };

    render() {
        const { auth } = this.props;
        const { isAuthenticated, user } = auth;
        const isDriver = user && user.vehicle_id;

        return (
            <div>
                <Navbar bg="info" expand="lg">
                    <Link to="/home">
                        <Navbar.Brand href="#home">Let's Go</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/about">
                                <Nav.Link href="#about">About Us</Nav.Link>
                            </Link>
                            <Link to="/contact">
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Link>
                            <Link to="/triplist">
                                <Nav.Link href="#triplist">Trip List</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav className="ml-auto">
                            {
                                isDriver ? (
                                    <Link to="/addtrip">
                                        <Nav.Link href="#link">Add Trip</Nav.Link>
                                    </Link>
                                ) : null
                            }
                            {
                                !isAuthenticated ? (
                                    <Fragment>
                                        <Link to="/login">
                                            <Nav.Link href="#home">Login</Nav.Link>
                                        </Link>
                                        <Link to="/register">
                                            <Nav.Link href="#link">Register</Nav.Link>
                                        </Link>
                                    </Fragment>
                                ) : null
                            }
                            <Link to="/home">
                                <Nav.Link href="#link">Search Trip</Nav.Link>
                            </Link>
                            {
                                isAuthenticated ? (
                                    <Fragment>
                                        <Link to="/login" onClick={this.logoutUser}>
                                            <Nav.Link href="#link">Logout</Nav.Link>
                                        </Link>
                                    </Fragment>
                                ) : null
                            }
                        </Nav>
                        {/*<Form inline>*/}
                        {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                        {/*    <Button variant="outline-success">Search</Button>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = {
    logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Navi);