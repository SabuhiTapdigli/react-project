import React, {Component} from 'react';
import {Form,Col,Button} from "react-bootstrap"
import { connect } from 'react-redux';
import { addTrip } from '../actions/trip';
import CustomToast from './CustomToast';
import { showToast } from '../actions/toast';

class Addtrip extends Component {
    state = {
        from_place: '',
        to_place: '',
        date: '',
        price: '',
        comment: '',
    };

    onFormControlChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = async e => {
        e.preventDefault();

        const from = this.state.from_place[0].toUpperCase() + this.state.from_place.substr(1);
        const to = this.state.to_place[0].toUpperCase() + this.state.to_place.substr(1);

        const tripData = {
            from_place: from,
            to_place: to,
            date: this.state.date,
            price: this.state.price,
            comment: this.state.comment
        };

        const successfullyAddedTrip = await this.props.addTrip(tripData);

        if (successfullyAddedTrip) {
            this.setState({
                from_place: '',
                to_place: '',
                date: '',
                price: '',
                comment: '',
            });
            this.props.showToast({
                headerText: 'Success',
                bodyText: 'Successfully added trip',
                delay: 2000
            });
        } else {
            this.props.showToast({
                headerText: 'Fail',
                bodyText: 'Something went wrong. Please try again',
                delay: 2000
            });
        }
    };

    render() {
        const { from_place, to_place, date, price, comment } = this.state;

        const addtripstyle={
            width:"25%",
            margin: "auto",
            height:"85vh"

        }
        return (
            <div style={addtripstyle}>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group controlId="formGroupFrom">
                        <Form.Label>Add Trip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="From"
                            name="from_place"
                            value={from_place}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupTo">
                        <Form.Control
                            type="text"
                            placeholder="To"
                            name="to_place"
                            value={to_place}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupDepDate">
                        <Form.Control
                            type="date"
                            placeholder="Departure date"
                            name="date"
                            value={date}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPrice">
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            name="price"
                            value={price}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Comment"
                            name="comment"
                            value={comment}
                            onChange={this.onFormControlChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Publish
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTrip,
    showToast
};

export default connect(null, mapDispatchToProps)(Addtrip);
