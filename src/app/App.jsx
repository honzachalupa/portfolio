import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import GoogleAnalytics from 'react-ga';
import { _writeCookie, _readCookie } from './helpers';
import config from 'app-config';
import { getTranslatedTexts } from './translations';
import projects from './projects';
import './App.scss';
import Page_Introduction from 'Pages/Introduction';
import Page_Projects from 'Pages/Projects';
import Page_ProjectDetail from 'Pages/Projects/Detail';
import Page_Cooperation from 'Pages/Cooperation';
import Page_AboutMe from 'Pages/AboutMe';
// import Page_NotFound from 'Pages/NotFound';

export const AppContext = React.createContext();

class App extends Component {
    constructor() {
        super();

        this.onComponentDidMount = this.onComponentDidMount.bind(this);
        this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
        this.updateContext = this.updateContext.bind(this);
        this.updateContextProperty = this.updateContextProperty.bind(this);
        this.navigate = this.navigate.bind(this);
        this.switchLanguage = this.switchLanguage.bind(this);

        const language = _readCookie('language') || 'cs';
        const translations = getTranslatedTexts(language);

        const url = new URL(window.location.href);
        const isPWA = url.searchParams.get('pwa') || false;

        this.state = {
            language,
            translations,
            projects: this.prepareProjects(projects),
            searchData: null,
            isNavigationOpened: false,
            isOnline: true,
            isPWA,
            selectedNavigationItem: null,
            windowDimensions: {
                width: null,
                height: null
            },
            _onComponentDidMount: this.onComponentDidMount,
            _updateContext: this.updateContext,
            _updateContextProperty: this.updateContextProperty,
            _navigate: this.navigate,
            _switchLanguage: this.switchLanguage
        };

        if (config.caching && config.caching.strategy) {
            this.initServiceWorker();
        }
    }

    componentWillMount() {
        GoogleAnalytics.initialize('UA-47064928-3');
    }

    componentDidMount() {
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);
    }

    componentWillUnount() {
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
    }

    componentDidUpdate(prevProps, prevState) {
        const languageHasChanged = prevState.language !== this.state.language;

        if (languageHasChanged) {
            const { language } = this.state;

            this.setState({
                translations: getTranslatedTexts(language)
            });
        }
    }

    /**
     * Initialization of SW used for caching (PWA requirement).
     *
     * @memberof App
     */
    initServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch((error) => {
                    console.log('SW registration failed: ', error);
                });
            });
        }
    }

    onComponentDidMount(pageDefinition) {
        const { id, label } = pageDefinition;

        document.title = `${config.name} | ${label}`;

        this.updateContextProperty('selectedNavigationItem', id);

        GoogleAnalytics.pageview(window.location.pathname);
    }

    updateOnlineStatus() {
        this.updateContextProperty('isOnline', navigator.onLine);
    }

    /**
     * Performs an update of the global (App-level) context. Old state will be replaced with the new one.
     *
     * @param {any} context
     * @memberof App
     */
    updateContext(context) {
        this.setState(context);
    }

    /**
     * Performs an update of the global (App-level) context. Updates only selected item.
     *
     * @param {any} key
     * @param {any} value
     * @memberof App
     */
    updateContextProperty(key, value) {
        this.setState({
            [key]: value
        });
    }

    prepareProjects(projects) {
        const filtered = projects.filter(project => project.isHidden === false || project.isHidden === undefined || project.isHidden === null);
        const ordered = filtered.sort((a, b) => {
            return new Date(b.addedDate) - new Date(a.addedDate);
        });

        return ordered;
    }

    /**
     * Performs navigation within the app.
     *
     * @param {any} path
     * @param {boolean} replaceInsteadOfPush
     * @memberof App
     */
    navigate(path, replaceInsteadOfPush) {
        if (replaceInsteadOfPush) {
            window.history.replaceState({}, '', path);
        } else {
            window.history.pushState({}, '', path);
        }

        this.setState({
            url: path
        });
    }

    /**
     * Toggles the app language.
     *
     * @memberof App
     */
    switchLanguage() {
        const { language: currentLanguage } = this.state;
        const newLanguage = currentLanguage === 'en' ? 'cs' : 'en';

        _writeCookie('language', newLanguage, 365);

        this.setState({
            language: newLanguage
        });
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Router history={browserHistory}>
                    <Switch>
                        <Route component={Page_Projects} path="/projects" exact />
                        <Route component={Page_ProjectDetail} path="/projects/:projectId" exact />
                        <Route component={Page_Cooperation} path="/cooperation" exact />
                        <Route component={Page_AboutMe} path="/about-me" exact />
                        <Route component={Page_Introduction} />
                    </Switch>
                </Router>
            </AppContext.Provider>
        );
    }
}

render(<App />, document.querySelector('#app'));
