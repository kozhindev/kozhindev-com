import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import Link from 'yii-steroids/ui/nav/Link';
import {STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';

import {html} from 'components';

import './Layout.scss';
import ColorBackground from 'routes/IndexPage/views/ColorBackground';
import {getCurrentItemParam, getNavItems, getRoute} from 'yii-steroids/reducers/navigation';
import {ROUTE_ROOT} from 'routes';

const bem = html.bem('Layout');


@connect(
    state => ({
        rootPagePath: getRoute(state, ROUTE_ROOT).path,
        isRootPage: getCurrentItemParam(state, 'id') === ROUTE_ROOT,
        navItems: getNavItems(state, ROUTE_ROOT),
    })
)
export default class Layout extends React.PureComponent {

    static propTypes = {
        isRootPage: PropTypes.bool,
        rootPagePath: PropTypes.string,
        navItems: PropTypes.object,
    };

    constructor() {
        super(...arguments);

        this._onScroll = this._onScroll.bind(this);
        this.state = {
            shortHeader: !this.props.isRootPage,
        };
    }

    componentDidMount() {
        if (this.props.isRootPage) {
            this._onScroll();
            window.addEventListener('scroll', this._onScroll, false);
        }
    }

    componentWillUnmount() {
        if (this.props.isRootPage) {
            window.removeEventListener('scroll', this._onScroll, false);
        }
    }

    render() {
        if (this.props.status === STATUS_RENDER_ERROR) {
            return null;
        }

        return (
            <div className={bem.block({short: this.state.shortHeader})}>
                <header className={bem.element('header')}>
                    <div className={bem.element('header-bg')}>
                        <ColorBackground/>
                    </div>
                    <div className='container'>
                        <Link
                            className={bem.element('header-logo')}
                            to={this.props.rootPagePath}
                            noStyles
                        >
                            KozhinDev
                        </Link>
                        <ul className={bem.element('header-nav')}>
                            {this.props.navItems.map(item => (
                                <li key={item.id}>
                                    <Link
                                        className={bem.element('header-nav-link', {
                                            'is-active': item.isActive,
                                        })}
                                        to={item.path}
                                        noStyles
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href='tel:+79509806194'
                                    className={bem.element('header-nav-link')}
                                >
                                    +7 950 980 6194
                                </a>
                            </li>
                            <li className={bem.element('header-nav-button')}>
                                <a
                                    className={bem.element('header-nav-link')}
                                    href='#'
                                >
                                    Обсудить проект
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className={bem.element('content')}>
                    {this.props.children}
                </main>
                <footer className={bem.element('footer')}>
                    <div className='container'>
                        <div className={'row'}>
                            <div className={bem(bem.element('text'), 'col-6')}>
                                Работаем с 2017 года
                            </div>
                            <ul className={bem(bem.element('footer-nav'), 'col-6', 'd-flex', 'justify-content-end')}>
                                {this.props.navItems.map(item => (
                                    <li
                                        className={bem.element('footer-nav-item')}
                                        key={item.id}
                                    >
                                        <Link
                                            to={item.path}
                                            className={bem.element('footer-nav-link')}
                                            noStyles
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className={bem.element('footer-nav-item')}>
                                    <a
                                        href='tel:+79509806194'
                                        className={bem.element('footer-nav-link', 'tel')}
                                    >
                                        +7 950 980 6194
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <ModalWrapper/>
            </div>
        );
    }

    _onScroll() {
        const shortHeader = window.scrollY > 100;
        if (this.state.shortHeader !== shortHeader) {
            this.setState({shortHeader});
        }
    }

}
