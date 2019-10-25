import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import {STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';

import {html} from 'components';

import './Layout.scss';
import ColorBackground from 'routes/IndexPage/views/ColorBackground';
import {getCurrentItemParam} from 'yii-steroids/reducers/navigation';
import {ROUTE_ROOT} from 'routes';

const bem = html.bem('Layout');

@connect(
    state => ({
        isRootPage: getCurrentItemParam(state, 'id') === ROUTE_ROOT,
    })
)
export default class Layout extends React.PureComponent {

    static propTypes = {
        isRootPage: PropTypes.bool,
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
                        <a
                            href='/'
                            className={bem.element('header-logo')}
                        >
                            KozhinDev
                        </a>
                        <ul className={bem.element('header-nav')}>
                            <li>
                                <a href='#'>
                                    Проекты
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Технологии
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a href='tel:+79509806194'>
                                    +7 950 980 6194
                                </a>
                            </li>
                            <li className={bem.element('header-nav-button')}>
                                <a
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
