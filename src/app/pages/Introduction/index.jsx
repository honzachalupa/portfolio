import React, { Component } from 'react';
import { AppContext } from 'App';
import Layout from 'Layouts/Main';
import AppName from 'Components/AppName';
import Button from 'Components/Button';
import ProjectOverview from 'Components/ProjectOverview';

class Page_Introduction extends Component {
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

    componentDidMount() {
        const { _onComponentDidMount } = this.props;

        _onComponentDidMount(this.state.page);
    }

    render() {
        const { translations, projects } = this.props;

        return (
            <section>
                <Layout page={this.state.page}>
                    <AppName className="desktop-only" />

                    <article className="basic-text-container">
                        <h2>{translations.aboutMe}</h2>
                        <p className="paragraph">{translations.aboutMeContent}</p>
                        <Button label={translations.showMore} path="/about-me" />
                    </article>

                    <article className="latest-projects">
                        <h2>{translations.latestProjects}</h2>
                        <ProjectOverview project={projects[0]} />
                        <ProjectOverview project={projects[1]} />
                        <ProjectOverview project={projects[2]} />
                        <ProjectOverview project={projects[3]} />

                        <div className="basic-button-container">
                            <Button label={translations.moreProjects} path="/projects" />
                        </div>
                    </article>
                </Layout>
            </section>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _onComponentDidMount }) => (
            <Page_Introduction {...props} projects={projects} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
