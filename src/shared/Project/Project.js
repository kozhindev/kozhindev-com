import React from 'react';
import {html} from 'components';
import './Project.scss';
import PropTypes from 'prop-types';
import List from 'shared/List';
import moment from 'moment';

const bem = html.bem('Project');


export default class Project extends React.PureComponent {

    static propTypes = {
        project: PropTypes.object,
    };

    render() {
        return (
            <div className={bem.block()}>
                {this.props.project.title && (
                    <h1 className={'mb-4'}>{this.props.project.title}</h1>
                )}
                {this.props.project.description && (
                    <p className={'mb-4'}>{this.props.project.description}</p>
                )}
                {this.props.project.url && (
                    <div className={'mb-1'}>
                        <a href={this.props.project.url}>{this.props.project.url}</a>
                    </div>
                )}
                {this.props.project.from && this.props.project.to && (
                    <div className={bem(bem.element('date'), 'mb-4')}>
                        {`${moment(this.props.project.from).format('d MMMM YYYY')} – ${this.props.project.to === 'NOW' ? 'настоящее время': moment(this.props.project.to).format('d MMMM YYYY')}`}
                    </div>
                )}
                {this.props.project.features && !!this.props.project.features.length && (
                    <List
                        list={this.props.project.features}
                        className={bem.element('list')}
                    />
                )}
            </div>
        )

    }
}
