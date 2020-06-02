import React, {Component} from 'react';
import {Container} from "react-bootstrap";


class Footer extends Component {
    render() {
        const bcolor={
            backgroundColor:"lightblue",
            padding: "10px"
        }
        return (
            <div style={bcolor} className="footer-copyright text-center ">
                <Container fluid>
                    &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> Let's Go.com </a>
                </Container>
            </div>
        );
    }
}

export default Footer;