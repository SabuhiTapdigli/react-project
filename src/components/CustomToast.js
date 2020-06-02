import React, { Component } from 'react';
import {Toast} from "react-bootstrap"
import { connect } from 'react-redux';
import { hideToast } from '../actions/toast';

const style = {
    position: 'absolute',
    top: '70px',
    right: '10px'
}

class CustomToast extends Component {
    hideToast = () => {
        this.props.hideToast();
    }

    render() {
        const { toast } = this.props;
        const { show, delay, headerText, bodyText } = toast;

        return (
            <Toast style={style} show={show} onClose={this.hideToast} delay={delay} autohide>
                <Toast.Header>
                    <strong className="mr-auto">{headerText}</strong>
                </Toast.Header>
                <Toast.Body>{bodyText}</Toast.Body>
            </Toast>
        );
    }
}

const mapStateToProps = state => ({
    toast: state.toast
});

const mapDispatchToProps = {
    hideToast
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomToast);