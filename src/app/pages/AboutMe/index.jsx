import React, { Component } from 'react';
import { _getHtmlFromMarkdown } from 'helpers';
import { AppContext } from 'App';
import Layout from 'Layouts/Main';
import LazyText from 'Components/LazyText';

class Page_AboutMe extends Component {
    constructor(props) {
        super(props);

        const { translations } = props;

        this.state = {
            page: {
                id: 'about-me',
                label: translations.aboutMe
            }
        };
    }

    componentDidMount() {
        const { _onComponentDidMount } = this.props;

        _onComponentDidMount(this.state.page);
    }

    render() {
        const { translations } = this.props;

        return (
            <section>
                <Layout page={this.state.page}>
                    <div className="basic-text-container">
                        <h2>
                            <LazyText value={translations.aboutMe} />
                        </h2>
                        <p className="paragraph" dangerouslySetInnerHTML={{ __html: _getHtmlFromMarkdown(translations.aboutMeContent) }} />
                    </div>
                </Layout>
            </section>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _onComponentDidMount }) => (
            <Page_AboutMe {...props} projects={projects} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
