import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap"
import { connect } from 'react-redux';
import { searchTrips } from '../actions/trip';

class SearchForm extends Component {
    state = {
        departure: '',
        destination: '',
        date: ''
    };

    onFormControlChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onFormSubmit = async e => {
        e.preventDefault();

        const searchData = {
            departure: this.state.departure,
            destination: this.state.destination,
            date: this.state.date,
        };

        this.props.searchTrips(searchData, this.props.history);
    };

    render() {
        const { departure, destination, date } = this.state;
        const { trips } = this.props;

        const fromOptions = [];
        trips.forEach(trip => {
            const found = trips.find(t => t.from_place.toLowerCase() === trip.from_place.toLowerCase());

            if (found && fromOptions.indexOf(found.from_place) === -1) {
                fromOptions.push(found.from_place)
            }
        });
        const fromPlaceOptions = fromOptions.map(from => (
            <option value={from}>{from}</option>
        ));

        const toOptions = [];
        trips.forEach(trip => {
            const found = trips.find(t => t.to_place.toLowerCase() === trip.to_place.toLowerCase());

            if (found && toOptions.indexOf(found.to_place) === -1) {
                toOptions.push(found.to_place)
            }
        });
        const toPlaceOptions = toOptions.map(to => (
            <option value={to}>{to}</option>
        ));

        return (
            <Form onSubmit={this.onFormSubmit}>
                <Form.Group>
                    <Form.Label>From City</Form.Label>
                    <Form.Control
                        as="select"
                        className="browser-default custom-select mb-4"
                        name="departure"
                        value={departure}
                        onChange={this.onFormControlChange}
                    >
                        <option value="" selected>From City</option>
                        {fromPlaceOptions}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>To City</Form.Label>
                    <Form.Control
                        as="select"
                        className="browser-default custom-select mb-4"
                        name="destination"
                        value={destination}
                        onChange={this.onFormControlChange}
                    >
                        <option value="" selected>To City</option>
                        {toPlaceOptions}
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="Departure date"
                        name="date"
                        value={date}
                        onChange={this.onFormControlChange}
                    />
                </Form.Group>

                <Button className="mt-5" variant="primary" type="submit">
                    Search
                </Button>
            </Form>

            // <Fragment>
            //     <div className="row">
            //         <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
            //             <option value="" disabled="" selected="">From City</option>
            //             <option value="1">Baku</option>
            //             <option value="2">Gabala</option>
            //             <option value="3">Sumgait</option>
            //         </select></div>
            //         <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
            //             <option value="" disabled="" selected="">To City</option>
            //             <option value="1">Shamaki</option>
            //             <option value="2">Ganca</option>
            //             <option value="3">Oguz</option>
            //         </select></div>
            //     </div>
            //     <div className="row mt-4">
            //         <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
            //             <option value="" disabled="" selected="">Anytime</option>
            //             <option value="1">6:00 AM</option>
            //             <option value="2">3:00 PM</option>
            //             <option value="3">6:00 PM</option>
            //         </select></div>
            //         <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
            //             <option value="" disabled="" selected="">Anytime</option>
            //             <option value="1">6:00 AM</option>
            //             <option value="2">3:00 PM</option>
            //             <option value="3">6:00 PM</option>
            //         </select></div>
            //     </div>
            //     <div className="row">
            //         <div className="col-sm-4"> <select className="browser-default custom-select mb-4" id="select">
            //             <option value="" disabled="" selected="">Kids(0-14)</option>
            //             <option value="1">1</option>
            //             <option value="2">2</option>
            //             <option value="3">3</option>
            //         </select> </div>
            //         <div class="col-sm-4"> <select className="browser-default custom-select mb-4" id="select">
            //             <option value="" disabled="" selected="">Adults(15-64)</option>
            //             <option value="1">1</option>
            //             <option value="2">2</option>
            //             <option value="3">3</option>
            //         </select> </div>
            //         <div className="col-sm-4">
            //             <select className="browser-default custom-select mb-4" id="select">
            //                 <option value="" disabled="" selected="">Seniors(65+)</option>
            //                 <option value="1">1</option>
            //                 <option value="2">2</option>
            //                 <option value="3">3</option>
            //             </select>
            //         </div>
            //     </div>
            //     <a href="#" className="btn btn-primary  mt-5">Search</a>
            //     </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    trips: state.trip.trips
});

const mapDispatchToProps = {
    searchTrips
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);