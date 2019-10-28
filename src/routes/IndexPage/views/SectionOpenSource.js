import React from 'react';
import List from 'shared/List'
import {html} from 'components';
import Icon from 'shared/Icon';
import './SectionOpenSource.scss';
import ProjectCard from 'shared/ProjectCard/ProjectCard';

const bem = html.bem('SectionOpenSource');

const SITES = {
    title: '',
    items: [
        {
            title: 'Jii Framework',
            href: 'https://github.com/jiisoft/jii',
            description: 'Full-Stack JavaScript фреймворк, основанный на архитектуре Yii2'
        },
        {
            title: 'Amadeus SOAP WebService',
            href: 'https://github.com/kozhindev/amadeus-ws-client',
            description: 'PHP клиент для работы с Amadeus GDS SOAP Web Service'
        },
        {
            title: 'Trade Ticker',
            href: 'https://github.com/kozhindev/trade-ticker',
            description: 'Реалтайм подгрузка курсов криптовалют с различных бирж'
        },
        {
            title: 'WebSocket Client & Server',
            href: 'https://github.com/kozhindev/ws',
            description: 'Веб-сокет клиент-север с авторизацией и улучшениями'
        },
        {
            title: 'ListParser',
            href: 'https://github.com/kozhindev/list-parser',
            description: 'Утилита для импорта больших списков в zip/csv/xls/..'
        },
        {
            title: 'XmlHelper',
            href: 'https://github.com/kozhindev/xml-helper',
            description: 'Преобразование XML -> Array и обратно'
        }
    ]
};


export default class SectionOpenSource extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>
                                <span>
                                    03
                                </span>
                                Open-Source
                            </h2>
                            <p className={bem.element('description')}>
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
                        <div className='col-lg-6'>
                            <List
                                className={bem.element('list')}
                                list={SITES}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
