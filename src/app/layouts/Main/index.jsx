import React, { Component } from 'react';
import { AppContext } from 'App';
import './style';
import Navigation from 'Components/Navigation';
import AppName from 'Components/AppName';
import Footer from 'Components/Footer';

let resizeTimeout;
// let scrollTimeout;

class Layout_Main extends Component {
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

        return (
            <div className={`${isNavigationOpened ? 'scrolling-disabled' : ''} page-${page.id}`}>
                <header className="navigation-container">
                    <AppName className="mobile-only" />
                    <Navigation windowWidth={windowWidth} />
                </header>

                <section className="content">
                    {content}
                </section>

                <Footer />
            </div>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ isNavigationOpened }) => (
            <Layout_Main {...props} isNavigationOpened={isNavigationOpened} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
