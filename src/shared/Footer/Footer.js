import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNavItems} from 'yii-steroids/reducers/navigation';
import Link from 'yii-steroids/ui/nav/Link';

import {html} from 'components';
import {ROUTE_ROOT} from 'routes';

import './Footer.scss';

const bem = html.bem('Footer');
const phoneNumber = '+7 950 980 6194';

@connect(
    state => ({
        navItems: getNavItems(state, ROUTE_ROOT),
    })
)
export default class Footer extends React.PureComponent {

    static propTypes = {
        navItems: PropTypes.object,
    };

    render() {

        return (
            <footer className={bem.block()}>
                <div className='container-fluid'>
                    <div className={'row'}>
                        <div className={bem(bem.element('text'), 'col-lg-6')}>
                            {__('Работаем с 2017 года')}
                        </div>
                        <ul className={bem(bem.element('nav'), 'col-6 d-none d-lg-flex justify-content-end')}>
                            {this.props.navItems.map(item => (
                                <li
                                    className={bem.element('nav-item')}
                                    key={item.id}
                                >
                                    <Link
                                        to={item.path}
                                        className={bem.element('nav-link')}
                                        noStyles
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className={bem.element('nav-item')}>
                                <a
                                    href={`tel:${phoneNumber.replace(/ /g, '')}`}
                                    className={bem.element('nav-link', 'tel')}
                                >
                                    {phoneNumber}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
