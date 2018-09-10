import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { _getFormfactor } from 'helpers';
import { AppContext } from 'App';
import './style';
import LanguageSwitcher from 'Components/LanguageSwitcher';

export default withRouter((props) => (
    <AppContext.Consumer>
        {({ translations, isNavigationOpened, selectedNavigationItem, _updateContext }) => (
            <Navigation {...props} translations={translations} isNavigationOpened={isNavigationOpened} selectedNavigationItem={selectedNavigationItem} _updateContext={_updateContext} />
        )}
    </AppContext.Consumer>
));

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

        // To-do: Consider second level navigation for projects

        return {
            isNavigationOpened,
            navigationItems: [{
                id: 'introduction',
                label: translations.introduction,
                path: '/'
            }, {
                id: 'projects',
                label: translations.projects,
                path: '/projects'/* ,
                subItems: [{
                    id: 'personal',
                    label: translations.personal,
                    path: '/projects?filter=personal'
                }, {
                    id: 'in-cooperation',
                    label: translations.inCooperation,
                    path: '/projects?filter=in-cooperation'
                }] */
            }, {
                id: 'photography',
                label: translations.photography,
                url: 'http://www.instagram.com/honzachalupa_photography/'
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
        const { _updateContext } = this.props;

        _updateContext('isNavigationOpened', !this.state.isNavigationOpened);
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
                        const hasSubItems = !!item.subItems;
                        const classNames = `item ${(item.id === selectedNavigationItem) ? 'is-selected' : ''} ${(hasSubItems) ? 'has-subitems' : ''}`;

                        let subItemsBlock;

                        if (hasSubItems) {
                            subItemsBlock = (
                                <div className="sub-items">
                                    {
                                        item.subItems.map(subItem => {
                                            if (subItem.url) {
                                                return (
                                                    <a key={subItem.id} className="sub-item" href={subItem.url} target="_blank" rel="noopener noreferrer">
                                                        <span className="label">{subItem.label}</span>
                                                    </a>
                                                );
                                            } else {
                                                return (
                                                    <button key={subItem.id} className="sub-item" onClick={() => this.handleNavigation(subItem.path)}>
                                                        <span className="label">{subItem.label}</span>
                                                    </button>
                                                );
                                            }
                                        })
                                    }
                                </div>
                            );
                        }

                        if (item.url) {
                            return (
                                <a key={item.id} className={classNames} href={item.url} target="_blank" rel="noopener noreferrer">
                                    <span className="label">{item.label}</span>
                                    {subItemsBlock}
                                </a>
                            );
                        } else {
                            return (
                                <button key={item.id} className={classNames} onClick={() => this.handleNavigation(item.path)}>
                                    <span className="label">{item.label}</span>
                                    {subItemsBlock}
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
