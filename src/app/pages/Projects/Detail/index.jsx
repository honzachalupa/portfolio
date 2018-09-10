import React, { Component } from 'react';
import { _getHtmlFromMarkdown } from 'helpers';
import { AppContext } from 'App';
import Layout from 'Layouts/ProjectDetail';
import LazyText from 'Components/LazyText';

export default (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _onComponentDidMount }) => (
            <Page_ProjectDetail {...props.match.params} projects={projects} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

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
        const { project } = this.state;

        const galleryBlock = (
            <div className="gallery" data-count={project.gallery.length}>
                {
                    project.gallery.map(image => {
                        const url = image.url || image;

                        return (
                            <div key={url} className={`image ${image.aspectRatio || ''}`} style={{ backgroundImage: `url(${url})` }} />
                        );
                    })
                }
            </div>
        );

        return (
            <section>
                <Layout page={this.state.page}>
                    <h1 className="name">
                        <LazyText value={project.name} />
                    </h1>

                    {galleryBlock}

                    <div className="description" dangerouslySetInnerHTML={{ __html: _getHtmlFromMarkdown(project.description) }} />
                </Layout>
            </section>
        );
    }
}
