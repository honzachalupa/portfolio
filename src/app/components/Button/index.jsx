import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './style';

class Button extends Component {
    handleNavigation(path) {
        const { history } = this.props;

        history.push(path);
        window.scrollTo(0, 0);
    }

    render() {
        const { label, onClick, path, url, icon, children: content, styleDisabled, className } = this.props;
        let buttonContent;

        if (!onClick && !path && !url) {
            console.error(new Error('Missing button\'s event.'));
        }

        if (content) {
            buttonContent = content;
        } else {
            const iconBlock = (icon) ? (
                <img className="icon" src={icon} alt="Icon" />
            ) : null;

            buttonContent = (
                <Fragment>
                    {iconBlock}
                    <span className="label">{label}</span>
                </Fragment>
            );
        }

        const styleDisabled_ClassName = (styleDisabled) ? 'style-disabled' : '';

        if (onClick) {
            return (
                <button className={`${className} ${styleDisabled_ClassName}`} onClick={onClick}>{buttonContent}</button>
            );
        } else if (path) {
            return (
                <button className={`${className} ${styleDisabled_ClassName}`} onClick={() => this.handleNavigation(path)}>{buttonContent}</button>
            );
        } else {
            return (
                <a className={`${className} ${styleDisabled_ClassName}`} href={url}>{buttonContent}</a>
            );
        }
    }
}

export default withRouter(Button);
