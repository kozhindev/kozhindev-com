import React from 'react';
import {html} from 'components';

import './List.scss';
import PropTypes from 'prop-types';


const bem = html.bem('List');


export default class List extends React.PureComponent {
    static propTypes = {
        list: PropTypes.object,
        className: PropTypes.string
    };

    render() {
        return (
            <div className={bem(bem.block(), this.props.className)}>
                {this.props.list.title && (
                    <h3 className={bem.element('title')}>
                        {this.props.list.title}
                    </h3>
                )}
                <ul className={bem.element('text')}>
                    {this.props.list.items.map((item, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <span className={bem.element('point')}>{'—'}</span>
                            <div>
                                {item.href
                                    ? (
                                        <a
                                            className={bem.element('item-title', 'link')}
                                            target={'_blank'}
                                            href={item.href}
                                        >
                                            {item.title}
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
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}
