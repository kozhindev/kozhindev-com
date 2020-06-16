import React from 'react';
import {html} from 'components';
import './ProjectPage.scss';
import Project from 'shared/Project';
import {projects} from 'data/projects';

import {head} from 'components';

const bem = html.bem('ProjectPage');

/*@head.hoc(
    props => {
        const project = projects.find(item => item.id === props.match.params.id) || {};
        return {
            title: project.title,
            description: project.description,
            image: project.previewImageUrl || null,
        };
    }
)*/
export default class ProjectPage extends React.PureComponent {

    static propTypes = {
    };

    render() {
        return (
            <div className={bem.block()}>
                <Project project={projects.find(item => item.id === this.props.match.params.id)} />
            </div>
        );
    }
}
