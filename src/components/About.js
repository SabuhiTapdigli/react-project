import React, {Component} from 'react';
import {Button, Container, Form} from "react-bootstrap";

class About extends Component {
    render() {
        const aboutstyle = {
            width: "25%",
            margin: "auto",
            height: "85vh"
        };
        return (
            <div style={aboutstyle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate est eveniet exercitationem
                expedita iste modi natus sunt tempora. Est maxime molestias nobis omnis repellat sapiente soluta tenetur
                ullam velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut, cumque harum ipsum
                laboriosam magni maiores nulla odio tempore voluptate? Eveniet id illum incidunt laborum mollitia nemo
                odit praesentium provident.
            </div>
        );
    }
}

export default About;