import React from 'react';
import PropTypes from 'prop-types';
import {html} from 'components';

import './Burger.scss';

const bem = html.bem('Burger');

export default class Burger extends React.PureComponent {
    static propTypes = {
        onToggle: PropTypes.func,
        isOpen: PropTypes.bool,
    };

    render() {
        return (
            <div
                className={bem.block({
                    'is-open': this.props.isOpen,
                })}
                onClick={this.props.onToggle}
            >
                <span className={bem.element('line', 'top')}/>
                <span className={bem.element('line', 'middle')}/>
                <span className={bem.element('line', 'bottom')}/>
            </div>
        );
    }

}
