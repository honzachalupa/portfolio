import React, { Component } from 'react';
import Layout from 'Layouts/Homepage';

export default class Page_NotFound extends Component {
    constructor() {
        super();

        this.state = {
            page: {
                label: 'Not Found'
            }
        };
    }

    render() {
        return (
            <section>
                <Layout page={this.state.page}>
                    <h1>{this.state.page.label}</h1>
                </Layout>
            </section>
        );
    }
}
