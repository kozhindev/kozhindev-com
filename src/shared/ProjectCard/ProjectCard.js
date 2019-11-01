import React from 'react';
import PropTypes from 'prop-types';
import ProjectLink from 'shared/ProjectLink';
import {html} from 'components';

import './ProjectCard.scss';

const bem = html.bem('ProjectCard');

export default class ProjectCard extends React.PureComponent {

    static propTypes = {
        project: PropTypes.object,
        name: PropTypes.string,
    };

    render() {
        return (
            <ProjectLink
                className={bem.block({name: this.props.name})}
                project={this.props.project}
            >
                <div className={bem.element('body')}>
                    <h3 className={bem.element('title')}>
                        {this.props.project.title}
                    </h3>
                    <div className={bem.element('description')}>
                        {this.props.project.description}
                    </div>
                </div>
            </ProjectLink>
        );
    }

}
