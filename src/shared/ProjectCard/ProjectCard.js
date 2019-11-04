import React from 'react';
import PropTypes from 'prop-types';
import _keyBy from 'lodash/keyBy';

import {html} from 'components';
import {tags} from 'data/projects';
import ProjectLink from 'shared/ProjectLink';

import './ProjectCard.scss';

const bem = html.bem('ProjectCard');

export default class ProjectCard extends React.PureComponent {

    static propTypes = {
        project: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            from: PropTypes.string,
            to: PropTypes.string,
            url: PropTypes.string,
            previewImageUrl: PropTypes.string,
            description: PropTypes.string,
        }),
        size: PropTypes.string,
    };

    render() {
        const indexedTags = _keyBy(tags, 'id');
        return (
            <ProjectLink
                className={bem.block({
                    'with-bg': !!this.props.project.previewImageUrl,
                    [this.props.size || 'md']: true,
                })}
                project={this.props.project}
            >
                {this.props.project.previewImageUrl && (
                    <div
                        className={bem.element('bg')}
                        style={{backgroundImage: `url(${this.props.project.previewImageUrl})`}}
                    />
                )}
                <div className={bem.element('body')}>
                    <h3 className={bem.element('title')}>
                        {this.props.project.title}
                    </h3>
                    <div className={bem.element('description')}>
                        {this.props.project.description}
                    </div>
                    <div className={bem.element('tags')}>
                        {this.props.project.tags.map(tagId => (
                            <span
                                key={tagId}
                                className={bem.element('tags-item')}
                                style={{
                                    color: indexedTags[tagId].color,
                                }}
                            >
                                {indexedTags[tagId].label}
                            </span>
                        ))}
                    </div>
                </div>
            </ProjectLink>
        );
    }

}
