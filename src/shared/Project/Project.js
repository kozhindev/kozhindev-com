import React from 'react';
import PropTypes from 'prop-types';
import _keyBy from 'lodash/keyBy';
import moment from 'moment';

import {html} from 'components';
import List from 'shared/List';
import {tags} from 'data/projects';

import './Project.scss';

const bem = html.bem('Project');

export default class Project extends React.PureComponent {

    static propTypes = {
        project: PropTypes.object,
    };

    render() {
        const indexedTags = _keyBy(tags, 'id');
        return (
            <div className={bem.block({'with-bg': !!this.props.project.previewImageUrl})}>
                {this.props.project.previewImageUrl && (
                    <div
                        className={bem.element('bg')}
                        style={{backgroundImage: `url(${this.props.project.previewImageUrl})`}}
                    />
                )}
                <div className={bem.element('content')}>
                    <h1 className={'mb-4'}>{this.props.project.title}</h1>
                    <p className={'mb-4'}>{this.props.project.description}</p>
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
                    {this.props.project.url && (
                        <div className={'mb-1'}>
                            <a href={this.props.project.url}>{this.props.project.url}</a>
                        </div>
                    )}
                    {this.props.project.from && this.props.project.to && (
                        <div className={bem(bem.element('date'), 'mb-4')}>
                            {`${moment(this.props.project.from).format('MMMM YYYY')} – ${this.props.project.to === 'NOW' ? 'настоящее время': moment(this.props.project.to).format('MMMM YYYY')}`}
                        </div>
                    )}
                    {this.props.project.features && !!this.props.project.features.length && (
                        <List
                            list={this.props.project.features}
                            className={bem.element('list')}
                        />
                    )}
                    <div className={bem.element('screens')}>
                        {this.props.project.screens.map((screen, index) => (
                            <div
                                key={index}
                                className={bem.element('screens-item')}
                            >
                                <img
                                    src={screen.imageUrl}
                                    alt={screen.label}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
