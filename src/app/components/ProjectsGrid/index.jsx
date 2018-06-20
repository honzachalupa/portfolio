import React, { Component } from 'react';
import { _getHtmlFromMarkdown } from 'helpers';
import { AppContext } from 'App';
import './style';
import Button from 'Components/Button';
import LazyText from 'Components/LazyText';

class ProjectsGrid extends Component {
    constructor() {
        super();

        this.resetFilter = this.resetFilter.bind(this);
    }

    setSearchData(filterBy, query) {
        const { _updateContextProperty } = this.props;

        _updateContextProperty('searchData', {
            filterBy,
            query
        });
    }

    resetFilter() {
        const { _updateContextProperty } = this.props;

        _updateContextProperty('searchData', null);
    }

    render() {
        const { filterBy, query, projects, translations } = this.props;

        let standarizedFilter = false;
        let headline;

        if (filterBy === 'type') {
            if (query === 'web-app') {
                standarizedFilter = true;
                headline = translations.webApps;
            } else {
                standarizedFilter = true;
                headline = translations.nativeApps;
            }
        } else {
            headline = `${translations.filteredBy} "${query}"`;
        }

        let filteredProjects = projects.filter(project => {
            if (project[filterBy].length) {
                return project[filterBy].indexOf(query) > -1;
            } else {
                return project => project[filterBy] === query;
            }
        });

        if (!filteredProjects) {
            headline = translations.allApps;

            filteredProjects = projects;
        }

        const resetFilterButtonBlock = (!standarizedFilter) ? (
            <Button label="Reset filter" onClick={this.resetFilter} />
        ) : null;

        return (
            <div>
                {resetFilterButtonBlock}
                <h2>
                    <LazyText value={headline} />
                </h2>
                <section className="items">
                    {
                        filteredProjects.map(project => {
                            const tagsBlock = project.tags.map(tag => (
                                <Button key={tag} className="tag" label={`#${tag}`} onClick={() => this.setSearchData('tags', tag)} styleDisabled />
                            ));

                            return (
                                <article key={project.id} className="item">
                                    <Button key={project.id} className="clickable" path={`/projects/${project.id}`} styleDisabled>
                                        <div className="image" style={{ backgroundImage: `url(${project.previewImage.url || project.previewImage})` }} />
                                        <h3 className="name">{project.name}</h3>
                                        <div className="description" dangerouslySetInnerHTML={{ __html: _getHtmlFromMarkdown(project.descriptionShort) }} />
                                    </Button>
                                    <div className="tags">{tagsBlock}</div>
                                </article>
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _updateContextProperty }) => (
            <ProjectsGrid {...props} projects={projects} translations={translations} _updateContextProperty={_updateContextProperty} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;
