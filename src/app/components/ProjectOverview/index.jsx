import React, { Component } from 'react';
import { _getHtmlFromMarkdown } from 'helpers';
import { AppContext } from 'App';
import './style';
import Button from 'Components/Button';
import LazyText from 'Components/LazyText';

export default (props) => (
    <AppContext.Consumer>
        {({ translations }) => (
            <ProjectOverview {...props} translations={translations} />
        )}
    </AppContext.Consumer>
);

class ProjectOverview extends Component {
    render() {
        const { project, translations } = this.props;

        return (
            <article>
                <div className="background">
                    <p className="text">{project.name}</p>
                </div>
                <div className="image" style={{ backgroundImage: `url(${project.previewImage})` }} />
                <div className="info">
                    <h3 className="name">
                        <LazyText value={project.name} />
                    </h3>
                    <div className="description" dangerouslySetInnerHTML={{ __html: _getHtmlFromMarkdown(project.descriptionShort) }} />
                    <Button label={translations.viewMore} path={`/projects/${project.id}`} />
                </div>
            </article>
        );
    }
}
