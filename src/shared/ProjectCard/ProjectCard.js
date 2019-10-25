import React from 'react';
import PropTypes from 'prop-types';

import {html} from 'components';

import './ProjectCard.scss';

const bem = html.bem('ProjectCard');

export default class ProjectCard extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    };

    render() {
        return (
            <div className={bem.block({name: this.props.name})}>
                <h3 className={bem.element('title')}>
                    {this.props.title}
                </h3>
                <div className={bem.element('description')}>
                    {this.props.description}
                </div>
            </div>
        );
    }

}
