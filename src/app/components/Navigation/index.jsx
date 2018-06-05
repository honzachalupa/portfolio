import React, { Component } from 'react';
import { AppContext } from './../../App';
import './style';
import LanguageSwitcher from 'Components/Navigation/LanguageSwitcher';

class Navigation extends Component {
    constructor() {
        super();

        this.toggleNavigationState = this.toggleNavigationState.bind(this);

        this.state = {
            navigationItems: [],
            isNavigationOpened: false
        };
    }

    static getDerivedStateFromProps(nextProps) {
        const { translations, isNavigationOpened } = nextProps;

        return {
            isNavigationOpened,
            navigationItems: [{
                id: 'introduction',
                label: translations.introduction
            }, {
                id: 'projects',
                label: translations.projects
            }, {
                id: 'photography',
                label: translations.photography
            }, {
                id: 'cooperation',
                label: translations.cooperation
            }, {
                id: 'about-me',
                label: translations.aboutMe
            }]
        };
    }

    toggleNavigationState() {
        const { _updateContextProperty } = this.props;

        _updateContextProperty('isNavigationOpened', !this.state.isNavigationOpened);
    }

    handleNavigation() {
        // this.props.browserHistory.push(url);
    }

    render() {
        const { windowWidth } = this.props;
        const { navigationItems, isNavigationOpened } = this.state;

        const optimalNavigation = (windowWidth >= 800) ? (
            <div>
                <nav className="items">
                    {
                        navigationItems.map(item => {
                            return (
                                <button key={item.id} className="item" onClick={this.handleNavigation(`/${item.id}`)}>{item.label}</button>
                            );
                        })
                    }
                    <LanguageSwitcher />
                </nav>
            </div>
        ) : (
            <div className={isNavigationOpened ? 'opened' : 'closed'}>
                <div className="overlay" onClick={this.toggleNavigationState} />

                <div className="hamburger-button" onClick={this.toggleNavigationState}>
                    <div className="line top" />
                    <div className="line middle" />
                    <div className="line bottom" />
                </div>

                <nav className="items">
                    {
                        navigationItems.map(item => {
                            return (
                                <button key={item.id} className="item" onClick={this.handleNavigation(`/${item.id}`)}>{item.label}</button>
                            );
                        })
                    }
                    <LanguageSwitcher />
                </nav>
            </div>
        );

        return optimalNavigation;
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ translations, isNavigationOpened, _updateContextProperty }) => (
            <Navigation {...props} translations={translations} isNavigationOpened={isNavigationOpened} _updateContextProperty={_updateContextProperty} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
