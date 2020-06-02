import React, { Component } from 'react';
import { Button, Table } from "react-bootstrap"
import { connect } from 'react-redux';
import CustomToast from './CustomToast';
import { showToast } from '../actions/toast';
import { reserveTrip } from '../actions/trip';

function formatDate(date) {
    date = new Date(date);

    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

class Trip extends Component {
    onReserveClick = () => {
        const { trip } = this.props;

        const tripData = {
            id: trip.id,
        }

        this.props.reserveTrip(tripData);
    }

    render() {
        const { trip } = this.props;
        const { from_place, to_place, comment, date, price, name, surname } = trip;
        
        return (
            <Table striped bordered hover size="sm" >
                <tr>
                    <td style={{ textAlign: "center", fontWeight: 'bold' }}>Driver Name:</td>
                    <td style={{ textAlign: "center" }}><em>{name} {surname}</em></td>
                    <td className={'bg-secondary'} style={{ textAlign: "center", fontWeight: 'bold', color: 'white' }}>Price(manat)</td>
                    <td className={'bg-secondary'} style={{ textAlign: "center", color: 'white' }}><em>{price}</em></td>
                </tr>
                <tbody>
                    <tr>
                        <td style={{ textAlign: "center", fontWeight: 'bold' }}>From:</td>
                        <td style={{ textAlign: "center" }}><em>{from_place}</em></td>
                        <td style={{ textAlign: "center", fontWeight: 'bold' }}>To:</td>
                        <td style={{ textAlign: "center" }}><em>{to_place}</em></td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center", fontWeight: 'bold' }}>Departure time:</td>
                        <td style={{ textAlign: "center" }}><em>{formatDate(date)}</em></td>
                        <td style={{ textAlign: "center", fontWeight: 'bold' }}>Comment</td>
                        <td style={{ textAlign: "center" }}><em>{comment}</em></td>
                    </tr>
                    <tr>
                        <td colSpan="4" style={{ textAlign: "center" }}><Button variant="secondary" block onClick={this.onReserveClick}>Reserve</Button></td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

const mapDispatchToProps = {
    showToast,
    reserveTrip
};

export default connect(null, mapDispatchToProps)(Trip);
