import React from 'react';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import {STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';

import {html} from 'components';

import './Layout.scss';
import ColorBackground from 'routes/IndexPage/views/ColorBackground';

const bem = html.bem('Layout');

export default class Layout extends React.PureComponent {

    render() {
        if (this.props.status === STATUS_RENDER_ERROR) {
            return null;
        }

        return (
            <div className={bem.block()}>
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
                                    Команда
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

}
