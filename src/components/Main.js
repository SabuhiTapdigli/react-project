import React, {Component} from 'react';
import {label,input} from "react-bootstrap"
import travel from "../img/travel.jpg"
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { getAllTrips } from '../actions/trip';

class Main extends Component {
    componentDidMount() {
        this.props.getAllTrips();
    }
    
    render() {
        const findtrip={
            width:"35%",
            margin: "auto",
            height:"78vh",
            backgroundImage: `url(${travel})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        return (
            <div className="card shadow mb-5 bg-white rounded" style={findtrip}>
                <div className="card-body">
                    <p className="card-title text-center shadow mb-5 rounded">Travel Booking Form</p>
                    <div className="icons text-center">

                        <i className="fa fa-taxi fa-2x" aria-hidden="true"></i>
                    </div>
                        <p className="searchText"><strong>Search For Cheap Travel</strong></p>
                    <SearchForm
                        history={this.props.history}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getAllTrips
};

export default connect(null, mapDispatchToProps)(Main);