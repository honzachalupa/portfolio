import React, { Component } from 'react';
import config from 'app-config';
import { AppContext } from 'App';
import './style';
import Navigation from 'Components/Navigation';
import AppName from 'Components/AppName';
import Footer from 'Components/Footer';

export default (props) => (
    <AppContext.Consumer>
        {({ isNavigationOpened, isPWA, _updateContext }) => (
            <Layout_Main {...props} isNavigationOpened={isNavigationOpened} isPWA={isPWA} _updateContext={_updateContext} />
        )}
    </AppContext.Consumer>
);

let resizeTimeout;
// let scrollTimeout;
class Layout_Main extends Component {
    constructor() {
        super();

        this.resizeThrottler = this.resizeThrottler.bind(this);
        // this.scrollThrottler = this.scrollThrottler.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        // this.updateScrolledDistance = this.updateScrolledDistance.bind(this);
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
        const { _updateContext } = this.props;

        _updateContext('windowDimensions', {
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
        const { page, children: content, isNavigationOpened, isPWA } = this.props;

        // alert(`isPWA: ${isPWA}`);
        const messengerBlock = (!isPWA) ? (
            <div className="fb-customerchat" attribution="setup_tool" page_id={config.facebookAppId} theme_color={config.accentColor} />
        ) : null;

        return (
            <div className={`${isNavigationOpened ? 'scrolling-disabled' : ''} page-${page.id}`}>
                {messengerBlock}

                <header className="navigation-container">
                    <AppName mobileOnly />
                    <Navigation />
                </header>

                <section className="content">
                    {content}
                </section>

                <Footer />
            </div>
        );
    }
}
