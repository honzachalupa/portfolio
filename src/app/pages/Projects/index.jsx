import React, { Component } from 'react';
import { AppContext } from 'App';
import Layout from 'Layouts/Main';
import ProjectsGrid from 'Components/ProjectsGrid';

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
        const { searchData } = this.props;

        if (searchData) {
            return (
                <section>
                    <Layout page={this.state.page}>
                        <ProjectsGrid {...searchData} />
                    </Layout>
                </section>
            );
        } else {
            return (
                <section>
                    <Layout page={this.state.page}>
                        <ProjectsGrid filterBy="type" query="web-app" />
                        <ProjectsGrid filterBy="type" query="native-app" />
                    </Layout>
                </section>
            );
        }
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ searchData, translations, _onComponentDidMount }) => (
            <Page_ProjectDetail {...props} searchData={searchData} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
