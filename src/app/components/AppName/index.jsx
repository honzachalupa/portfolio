import React, { Component } from 'react';
import config from 'app-config';
import './style';
import Button from 'Components/Button';

export default class AppName extends Component {
    render() {
        return (
            <div {...this.props}>
                <Button path="/" styleDisabled>
                    <h1>{config.name}</h1>
                </Button>
            </div>
        );
    }
}
