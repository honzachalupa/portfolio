import React, { Component } from 'react';
import { AppContext } from 'App';
import './style';

export default (props) => (
    <AppContext.Consumer>
        {({ translations }) => (
            <Footer {...props} translations={translations} />
        )}
    </AppContext.Consumer>
);

class Footer extends Component {
    render() {
        const { translations } = this.props;

        const year = new Date().getFullYear();

        return (
            <footer>
                <p>Copyright &copy; 2008 - {year} {translations.allRightsReservedName}</p>
                <p>{translations.allRightsReserved}</p>
            </footer>
        );
    }
}
