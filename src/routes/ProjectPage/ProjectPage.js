import React from 'react';
import {html} from 'components';
import './ProjectPage.scss';
import Project from 'shared/Project';
import {projects} from 'data/projects';

const bem = html.bem('ProjectPage');

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
