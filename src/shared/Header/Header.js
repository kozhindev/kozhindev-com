import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentItemParam, getNavItems} from 'yii-steroids/reducers/navigation';
// import {isDesktop} from 'yii-steroids/reducers/screen';
import Burger from './views/Burger';
import Link from 'yii-steroids/ui/nav/Link';

import {html} from 'components';
import ColorBackground from 'routes/IndexPage/views/ColorBackground';
import {ROUTE_ROOT} from 'routes';

const bem = html.bem('Header');
const phoneNumber = '+7 950 980 6194';

import './Header.scss';
import Button from 'yii-steroids/ui/form/Button';


@connect(
    state => ({
        // isDesktop: isDesktop(state),
        isDesktop: typeof window === 'undefined' || window.innerWidth > 1210,
        isRootPage: getCurrentItemParam(state, 'id') === ROUTE_ROOT,
        navItems: getNavItems(state, ROUTE_ROOT),
    })
)
export default class Header extends React.PureComponent {

    static propTypes = {
        isRootPage: PropTypes.bool,
        isDesktop: PropTypes.bool,
        navItems: PropTypes.array,
    };

    constructor() {
        super(...arguments);

        this._onScroll = this._onScroll.bind(this);
        this._onMobileNavToggle = this._onMobileNavToggle.bind(this);
        this.state = {
            isShort: !this.props.isRootPage || !this.props.isDesktop,
            isMobileNavOpen: false,
        };
    }

    componentDidUpdate(prevProps, prevState) {
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
            if (this.props.isDesktop) {
                this._enableScrollAnimate();
            }
        }

        //resize with opened mobile nav
        if (this.state.isMobileNavOpen && !prevProps.isDesktop && this.props.isDesktop) {
            this._onMobileNavToggle();
        }

        if (!prevState.isMobileNavOpen && this.state.isMobileNavOpen) {
            html.addClass(document.body, 'overflow-hidden');
        }


        if (prevState.isMobileNavOpen && !this.state.isMobileNavOpen) {
            html.removeClass(document.body, 'overflow-hidden');
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
        return (
            <header className={bem.block({
                short: this.state.isShort,
                'mobile-nav-open': this.state.isMobileNavOpen,
            })}>
                <div className={bem.element('bg')}>
                    <ColorBackground/>
                </div>
                <div className='container-fluid'>
                    <Link
                        className={bem.element('logo')}
                        to={'/'}
                        noStyles
                        onClick={this.state.isMobileNavOpen && this._onMobileNavToggle || undefined}
                    >
                        KozhinDev
                    </Link>
                    {this._renderNav()}
                    <div className={bem.element('burger')}>
                        <Burger
                            isOpen={this.state.isMobileNavOpen}
                            onToggle={this._onMobileNavToggle}
                        />
                    </div>
                </div>
                <div className={bem.element('mobile-nav-wrapper')}>
                    <div className={bem.element('mobile-nav-bg')}>
                        <ColorBackground/>
                    </div>
                    <div className={'container-fluid'}>
                        {this._renderMobileNav()}
                    </div>
                </div>
            </header>
        );
    }

    _renderNav() {
        return (
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
                {/*<li>
                    <Button
                        className={bem.element('nav-btn')}
                        color='primary'
                        label={__('Обсудить проект')}
                    />
                </li>*/}
            </ul>
        );
    }

    _renderMobileNav() {
        return(
            <ul className={bem.element('mobile-nav')}>
                {this.props.navItems.map(item => (
                    <li key={item.id}>
                        <Link
                            className={bem.element('nav-link', {
                                'is-active': item.isActive,
                            })}
                            to={item.path}
                            noStyles
                            onClick={this._onMobileNavToggle}
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
            </ul>
        );
    }

    _onMobileNavToggle() {
        this.setState({isMobileNavOpen: !this.state.isMobileNavOpen});
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
