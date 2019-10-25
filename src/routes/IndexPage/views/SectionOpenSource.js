import React from 'react';

import {html} from 'components';

import './SectionOpenSource.scss';
import ProjectCard from 'shared/ProjectCard/ProjectCard';

const bem = html.bem('SectionOpenSource');

export default class SectionOpenSource extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <h2>
                                <span>
                                    03
                                </span>
                                Open-Source
                            </h2>
                            <p>
                                Мы создаем open-source решения, накапливая в них лучшие практики и опыт
                                Переиспользуя код, мы увеличиваем качество и скорость разработки
                            </p>
                            <a
                                className={bem.element('github-link')}
                                href='https://github.com/kozhindev'
                                target='_blank'
                            >
                                github.com/kozhindev
                            </a>
                            <ProjectCard
                                name='steroids'
                                title='Yii Steroids'
                                description='Расширение функционала PHP Yii2 и набор React компонентов для SPA приложений'
                            />
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <a
                                        href='https://github.com/jiisoft/jii'
                                        target='_blank'
                                    >
                                        Jii Framework
                                    </a>
                                    <p>
                                        Full-Stack JavaScript фреймворк, основанный на архитектуре Yii2
                                    </p>
                                </li>
                                <li>
                                    <a
                                        href='https://github.com/kozhindev/amadeus-ws-client'
                                        target='_blank'
                                    >
                                        Amadeus SOAP WebService
                                    </a>
                                    <p>
                                        PHP клиент для работы с Amadeus GDS SOAP Web Service
                                    </p>
                                </li>
                                <li>
                                    <a
                                        href='https://github.com/kozhindev/trade-ticker'
                                        target='_blank'
                                    >
                                        Trade Ticker
                                    </a>
                                    <p>
                                        Реалтайм подгрузка курсов криптовалют с различных бирж
                                    </p>
                                </li>
                                <li>
                                    <a
                                        href='https://github.com/kozhindev/ws'
                                        target='_blank'
                                    >
                                        WebSocket Client & Server
                                    </a>
                                    <p>
                                        Веб-сокет клиент-север с авторизацией и улучшениями
                                    </p>
                                </li>
                                <li>
                                    <a
                                        href='https://github.com/kozhindev/list-parser'
                                        target='_blank'
                                    >
                                        ListParser
                                    </a>
                                    <p>
                                        Утилита для импорта больших списков в zip/csv/xls/..
                                    </p>
                                </li>
                                <li>
                                    <a
                                        href='https://github.com/kozhindev/xml-helper'
                                        target='_blank'
                                    >
                                        XmlHelper
                                    </a>
                                    <p>
                                        Преобразование XML -> Array и обратно
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
