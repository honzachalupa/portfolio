import React, { Component } from 'react';
import { AppContext } from 'App';
import Layout from 'Layouts/ProjectDetail';
import ProjectOverview from 'Components/ProjectOverview';

class Page_ProjectDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: {
                id: 'project-detail',
                label: 'Project detail'
            },
            project: this.findProject(props.projectId)
        };
    }

    componentDidMount() {
        const { _onComponentDidMount } = this.props;

        _onComponentDidMount(this.state.page);
    }

    findProject(id) {
        const { projects } = this.props;

        return projects.find((p) => p.id === id);
    }

    render() {
        return (
            <section>
                <Layout page={this.state.page}>
                    <ProjectOverview project={this.state.project} />
                </Layout>
            </section>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _onComponentDidMount }) => (
            <Page_ProjectDetail {...props.match.params} projects={projects} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
