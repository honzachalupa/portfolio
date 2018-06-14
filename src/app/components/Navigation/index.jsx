import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { _getFormfactor } from 'helpers';
import { AppContext } from 'App';
import './style';
import LanguageSwitcher from 'Components/LanguageSwitcher';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggleNavigationState = this.toggleNavigationState.bind(this);

        this.state = {
            navigationItems: [],
            isNavigationOpened: false
        };
    }

    static getDerivedStateFromProps(nextProps) {
        const { translations, isNavigationOpened, selectedNavigationItem } = nextProps;

        return {
            isNavigationOpened,
            navigationItems: [{
                id: 'introduction',
                label: translations.introduction,
                path: '/'
            }, {
                id: 'projects',
                label: translations.projects,
                path: '/projects'
            }, {
                id: 'photography',
                label: translations.photography,
                url: 'http://www.instagram.com/honzachalupa/'
            }, {
                id: 'cooperation',
                label: translations.cooperation,
                path: '/cooperation'
            }, {
                id: 'about-me',
                label: translations.aboutMe,
                path: '/about-me'
            }],
            selectedNavigationItem
        };
    }

    toggleNavigationState() {
        const { _updateContextProperty } = this.props;

        _updateContextProperty('isNavigationOpened', !this.state.isNavigationOpened);
    }

    handleNavigation(url) {
        this.props.history.push(url);
        this.toggleNavigationState();

        window.scrollTo(0, 0);
    }

    render() {
        const { navigationItems, isNavigationOpened, selectedNavigationItem } = this.state;

        const hamburgerButtonBlock = (
            <div className="hamburger-button" onClick={this.toggleNavigationState}>
                <div className="line top" />
                <div className="line middle" />
                <div className="line bottom" />
            </div>
        );

        const itemsBlock = (
            <nav className="items">
                {
                    navigationItems.map(item => {
                        const selectedClassName = (item.id === selectedNavigationItem) ? 'is-selected' : '';

                        if (item.url) {
                            return (
                                <a key={item.id} className={`item ${selectedClassName}`} href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.label}
                                </a>
                            );
                        } else {
                            return (
                                <button key={item.id} className={`item ${selectedClassName}`} onClick={() => this.handleNavigation(item.path)}>
                                    {item.label}
                                </button>
                            );
                        }
                    })
                }
                <LanguageSwitcher />
            </nav>
        );

        return (_getFormfactor() === 'desktop') ? (
            <div className="desktop">
                {itemsBlock}
            </div>
        ) : (
            <div className={`mobile ${isNavigationOpened ? 'opened' : 'closed'}`}>
                <div className="overlay" onClick={this.toggleNavigationState} />

                {hamburgerButtonBlock}
                {itemsBlock}
            </div>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ translations, isNavigationOpened, selectedNavigationItem, _updateContextProperty }) => (
            <Navigation {...props} translations={translations} isNavigationOpened={isNavigationOpened} selectedNavigationItem={selectedNavigationItem} _updateContextProperty={_updateContextProperty} />
        )}
    </AppContext.Consumer>
);

export default withRouter(ContextWrapper);
