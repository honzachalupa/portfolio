import React, { Component } from 'react';
import { AppContext } from 'App';
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
        const { translations } = this.props;

        return (
            <section>
                <Layout page={this.state.page}>
                    <div className="about-me">
                        <h2>{translations.aboutMe}</h2>
                        <p>{translations.aboutMeContent}</p>
                    </div>

                    <ProjectOverview selector="second-newest" />
                    <ProjectOverview selector="second-newest" />
                </Layout>
            </section>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ translations }) => (
            <Page_Home {...props} translations={translations} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
