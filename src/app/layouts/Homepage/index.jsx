import React, { Component } from 'react';
import { _getFormfactor } from 'helpers';
import { AppContext } from './../../App';
import './style';
import Navigation from 'Components/Navigation';

let resizeTimeout;
// let scrollTimeout;

class Layout_Homepage extends Component {
    constructor() {
        super();

        this.resizeThrottler = this.resizeThrottler.bind(this);
        // this.scrollThrottler = this.scrollThrottler.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        // this.updateScrolledDistance = this.updateScrolledDistance.bind(this);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            scrolledDistance: 0
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeThrottler, false);
        // window.addEventListener('scroll', this.scrollThrottler, false);

        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeThrottler);
        // window.removeEventListener('scroll', this.scrollThrottler);
    }

    resizeThrottler() {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(() => {
                resizeTimeout = null;

                this.updateDimensions();
            }, 60);
        }
    }

    /* scrollThrottler() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;

                this.updateScrolledDistance();
            }, 60);
        }
    } */

    updateDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    /* updateScrolledDistance() {
        this.setState({
            scrolledDistance: window.scrollY
        });
    } */

    render() {
        const { page, children: content, isNavigationOpened } = this.props;
        const { width: windowWidth } = this.state;

        console.log(_getFormfactor());

        return (
            <div className={`${isNavigationOpened ? 'scrolling-disabled' : ''} page-${page.id}`}>
                <Navigation windowWidth={windowWidth} />

                <section className="content">
                    {content}
                </section>
            </div>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ isNavigationOpened }) => (
            <Layout_Homepage {...props} isNavigationOpened={isNavigationOpened} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
