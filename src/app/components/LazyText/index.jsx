import { Component } from 'react';

export default class LazyText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tempValue: 'X',
            finalValue: props.value
        };

        this.run();
    }

    componentWillReceiveProps(nextProps) {
        const valueHasChanged = this.props.value !== nextProps.value;

        if (valueHasChanged) {
            this.setState({
                tempValue: nextProps.value,
                finalValue: nextProps.value
            });
        }
    }

    run() {
        const { finalValue } = this.state;
        const { time } = this.props;
        const timespan = (time || 600) / finalValue.length;
        let tempLength = 1;

        const interval = setInterval(() => {
            let randomChars = '';
            const charSet = finalValue.replace(/\s-/, '');

            for (let i = 0; i < tempLength; i += 1) {
                randomChars += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }

            if (randomChars.length !== finalValue.length) {
                this.setState({
                    tempValue: randomChars
                });
            } else {
                clearInterval(interval);

                this.setState({
                    tempValue: finalValue
                });
            }

            tempLength += 1;
        }, timespan);
    }

    render() {
        return this.state.tempValue;
    }
}
