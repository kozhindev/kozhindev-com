import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentItemParam, getNavItems} from 'yii-steroids/reducers/navigation';
import {isDesktop} from 'yii-steroids/reducers/screen';
import Link from 'yii-steroids/ui/nav/Link';

import {html} from 'components';
import ColorBackground from 'routes/IndexPage/views/ColorBackground';
import {ROUTE_ROOT} from 'routes';

const bem = html.bem('Header');

import './Header.scss';


@connect(
    state => ({
        isDesktop: isDesktop(state),
        isRootPage: getCurrentItemParam(state, 'id') === ROUTE_ROOT,
        navItems: getNavItems(state, ROUTE_ROOT),
    })
)
export default class Header extends React.PureComponent {

    static propTypes = {
        isRootPage: PropTypes.bool,
        isDesktop: PropTypes.bool,
        navItems: PropTypes.object,
    };

    constructor() {
        super(...arguments);

        this._onScroll = this._onScroll.bind(this);
        this.state = {
            isShort: !this.props.isRootPage || !this.props.isDesktop,
        };
    }

    componentDidUpdate(prevProps) {
        //resize on root page
        if (prevProps.isRootPage && this.props.isRootPage) {
            if (prevProps.isDesktop && !this.props.isDesktop) {
                this._disableScrollAnimate();
            }

            if (!prevProps.isDesktop && this.props.isDesktop) {
                this._enableScrollAnimate();
            }
        }

        //change route
        if (prevProps.isRootPage && !this.props.isRootPage) {
            this._disableScrollAnimate();
        }

        //return to root
        if (!prevProps.isRootPage && this.props.isRootPage) {
            this._enableScrollAnimate();
        }
    }

    componentDidMount() {
        if (this.props.isRootPage && this.props.isDesktop) {
            this._enableScrollAnimate();
        }
    }

    componentWillUnmount() {
        if (this.props.isRootPage) {
            window.removeEventListener('scroll', this._onScroll, false);
        }
    }


    render() {
        const phoneNumber = '+7 950 980 6194';

        return (
            <header className={bem.block({
                short: this.state.isShort
            })}>
                <div className={bem.element('bg')}>
                    <ColorBackground/>
                </div>
                <div className='container'>
                    <Link
                        className={bem.element('logo')}
                        to={'/'}
                        noStyles
                    >
                        KozhinDev
                    </Link>
                    <ul className={bem.element('nav')}>
                        {this.props.navItems.map(item => (
                            <li key={item.id}>
                                <Link
                                    className={bem.element('nav-link', {
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
                                href={`tel:${phoneNumber.replace(/ /g, '')}`}
                                className={bem.element('nav-link')}
                            >
                                {phoneNumber}
                            </a>
                        </li>
                        <li className={bem.element('nav-button')}>
                            <a
                                className={bem.element('nav-link')}
                                href='#'
                            >
                                {__('Обсудить проект')}
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }

    _onScroll() {
        const isShort = window.scrollY > 100;
        if (this.state.isShort !== isShort) {
            this.setState({isShort});
        }
    }

    _enableScrollAnimate() {
        this._onScroll();
        window.addEventListener('scroll', this._onScroll, false);
    }

    _disableScrollAnimate() {
        this.setState({isShort: true});
        window.removeEventListener('scroll', this._onScroll, false);
    }
}
