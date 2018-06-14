import React, { Component } from 'react';
import { AppContext } from 'App';
import './style';

class ProjectOverview extends Component {
    constructor(props) {
        super(props);

        const { projects, selector } = props;

        this.state = {
            project: this.filterProjects(projects, selector)
        };
    }

    filterProjects(projects, selector = '') {
        const index = (selector === 'second-newest') ? 1 : 0;

        return projects[index];
    }

    handleNavigation() {
        // this.props.browserHistory.push(url);
    }

    render() {
        const { project } = this.state;

        return (
            <a href={`./projects/${project.id}`} style={{ backgroundImage: `url(${project.previewImage})` }}>
                <h3>{project.name}</h3>
            </a>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ projects }) => (
            <ProjectOverview {...props} projects={projects} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
