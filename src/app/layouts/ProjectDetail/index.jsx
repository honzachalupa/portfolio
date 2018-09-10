import React, { Component } from 'react';
import { AppContext } from 'App';
import './style';
import Button from 'Components/Button';
import Footer from 'Components/Footer';

export default (props) => (
    <AppContext.Consumer>
        {({ translations }) => (
            <Layout_ProjectDetail {...props} translations={translations} />
        )}
    </AppContext.Consumer>
);

let resizeTimeout;
// let scrollTimeout;
class Layout_ProjectDetail extends Component {
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
        const { page, children: content, translations } = this.props;

        return (
            <div className={`page-${page.id}`}>
                <section className="content">
                    <Button label={translations.backToProjectsList} path="/projects" />

                    {content}
                </section>

                <Footer />
            </div>
        );
    }
}
