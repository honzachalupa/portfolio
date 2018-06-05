import React, { Component } from 'react';
import { AppContext } from './../../App';
import Layout from 'Layouts/Homepage';
import ProjectOverview from 'Components/ProjectOverview';

class Page_Home extends Component {
    constructor(props) {
        super(props);

        const { translations } = props;

        this.state = {
            page: {
                id: 'introduction',
                label: translations.introduction
            }
        };
    }

    render() {
        const { translations, projects } = this.props;
        const latestProject = projects[1];
        const secondLatestProject = projects[2];

        return (
            <section>
                <Layout page={this.state.page}>
                    <div className="about-me">
                        <h2>{translations.aboutMe}</h2>
                        <p>{translations.aboutMeContent}</p>
                    </div>
                    <ProjectOverview project={latestProject} />
                    <ProjectOverview project={secondLatestProject} />
                    <ProjectOverview project={projects[3]} />
                    <ProjectOverview project={projects[4]} />
                </Layout>
            </section>
        );
    }
}

const ContextWrapper = () => (
    <AppContext.Consumer>
        {({ projects, translations }) => (
            <Page_Home projects={projects} translations={translations} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
