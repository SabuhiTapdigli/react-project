import React, {Component} from 'react';
import {Table} from "react-bootstrap"
import { connect } from 'react-redux';
import { getAllTrips } from '../actions/trip';
import Trip from './Trip';

class TripList extends Component {
    componentDidMount() {
        this.props.getAllTrips();
    };

    render() {
        const { trips } = this.props;

        const TripList={
            width:"50%",
            margin: "auto",
            height:"85vh"

        };
        return (
            <div style={TripList}>
                <Table striped bordered hover size="sm" >
                    <tr>
                        <td className={'bg-secondary'} style={{textAlign:"center", fontWeight:'bold', color:'white'}}>
                            Trip List
                        </td>

                    </tr>
                </Table>
                {
                    trips.map(trip => (
                        <Trip
                            key={trip.id}
                            trip={trip}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    trips: state.trip.trips
});

const mapDispatchToProps = {
    getAllTrips
};

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
