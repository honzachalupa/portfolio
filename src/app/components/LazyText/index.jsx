import React, { Component, Fragment } from 'react';

export default class LazyText extends Component {
    constructor(props) {
        super(props);

        const { value } = props;

        this.state = {
            tempValue: '',
            finalValue: value,
            length: value.length
        };
    }

    componentDidMount() {
        const { finalValue, length } = this.state;
        const timespan = 1000 / length;
        let tempLength = 0;

        const interval = setInterval(() => {
            let tempValue = '';
            const charSet = finalValue.replace(/\s-/, '');

            for (let i = 0; i < tempLength; i += 1) {
                tempValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }

            if (tempValue.length === length) {
                clearInterval(interval);

                this.setState({
                    tempValue: finalValue
                });
            } else {
                this.setState({
                    tempValue
                });
            }

            tempLength += 1;
        }, timespan);
    }

    render() {
        const { tempValue } = this.state;

        return (
            <Fragment>
                {tempValue}
            </Fragment>
        );
    }
}
