import React from 'react';
import {html} from 'components';

import './List.scss';
import PropTypes from 'prop-types';


const bem = html.bem('List');


export default class List extends React.PureComponent {
    static propTypes = {
        list: PropTypes.array,
        className: PropTypes.string
    };

    renderTitlingItem(item) {
        return (
            <>
                {item.href
                    ? (
                        <a
                            className={bem.element('item-title', 'link')}
                            target={'_blank'}
                            href={item.href}
                        >
                            {item.title || item.href}
                        </a>
                    )
                    : (
                        <span className={bem.element('item-title')}>
                            {item.title}
                        </span>
                    )
                }
                <p className={bem.element('item-description')}>
                    {item.description}
                </p>
            </>
        )
    }

    render() {
        return (
            <div className={bem(bem.block(), this.props.className)}>
                <ul className={bem.element('text')}>
                    {this.props.list.map((item, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <span className={bem.element('point')}>{'—'}</span>
                            <div>
                                {(typeof item === 'string')
                                    ? (
                                        <p className={bem.element('item-description')}>
                                            {item}
                                        </p>
                                    )
                                    : this.renderTitlingItem(item)
                                }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}
