import React, { Component } from 'react';
import './style';
import Button from 'Components/Button';
import LazyText from 'Components/LazyText';

export default class ProjectOverview extends Component {
    handleNavigation() {
        // this.props.browserHistory.push(url);
    }

    render() {
        const { project } = this.props;

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
                    <p className="description" dangerouslySetInnerHTML={{ __html: project.descriptionShort }} />
                    <Button value="View more" />
                </div>
            </article>
        );
    }
}
