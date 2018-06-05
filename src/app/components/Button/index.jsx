import React, { Component } from 'react';
import './style';

export default class Button extends Component {
    render() {
        const { value } = this.props;

        return (
            <button>{value}</button>
        );
    }
}
