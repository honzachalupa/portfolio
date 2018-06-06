import React, { Component } from 'react';
import './style';

export default class LandingArea extends Component {
    render() {
        const { height, navigationHeight } = this.props;

        return (
            <header style={{ height: `${height}px`, marginTop: `${navigationHeight}px` }}>
                <div className="background">
                    <h1 className="headline">Honza Chalupa</h1>
                    <h2 className="tags">front-end developer ~ wannabe UX designer ~ car-lover ~ mountain biker</h2>
                </div>
            </header>
        );
    }
}
