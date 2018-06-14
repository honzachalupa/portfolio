import React, { Component } from 'react';
import { AppContext } from 'App';
import Layout from 'Layouts/Homepage';
import ProjectOverview from 'Components/ProjectOverview';

class Page_ProjectDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: {
                id: 'projects',
                label: 'Projects'
            }
        };
    }

    componentDidMount() {
        const { _onComponentDidMount } = this.props;

        _onComponentDidMount(this.state.page);
    }

    render() {
        const { projects } = this.props;

        return (
            <section>
                <Layout page={this.state.page}>
                    {
                        projects.map(project => (
                            <ProjectOverview key={project.id} project={project} />
                        ))
                    }
                </Layout>
            </section>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _onComponentDidMount }) => (
            <Page_ProjectDetail {...props} projects={projects} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
