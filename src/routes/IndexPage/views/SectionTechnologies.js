import React from 'react';

import {html} from 'components';

import './SectionTechnologies.scss';

const bem = html.bem('SectionTechnologies');

export default class SectionTechnologies extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container-fluid'>
                    <h2>
                        <span>
                            04
                        </span>
                        Технологии
                    </h2>
                    <p className={bem.element('description')}>
                        Для каждого проекта настраиваем деплой Gitlab CI на dev/prod сервера, мониторим ошибки через
                        Sentry
                        <br/>Для масштабирования HighLoad проектов используем Kubernetes, Docker и AWS
                    </p>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <div className={bem.element('cart')}>
                            <h3 className={bem.element('cart-title', {logo: 'yii'})}>
                                Backend
                            </h3>
                            <p className={bem.element('cart-tech')}>
                                PHP7, Yii2, PostgreSQL, NodeJS
                            </p>
                            <p className={bem.element('cart-tags')}>
                                {this.renderTags([
                                    'Yii 1', 'Cake PHP', 'Zend', 'Laravel', 'WebSocket', 'MySQL', 'SQLite',
                                    'Redis', 'Sphinx', 'Elastic', 'PHPUnit', 'Composer', 'REST', 'SOAP', 'JSON', 'JSON-RPC',
                                    'Comet', 'Long-pooling', 'RabbitMQ', 'AWS', 'Docker', 'Memcache', 'XCache', 'APC', 'Jboss',
                                    'Express', 'NodeUnit',
                                ])}
                            </p>
                        </div>
                        <div className={bem.element('cart')}>
                            <h3 className={bem.element('cart-title', {logo: 'react'})}>
                                Frontend
                            </h3>
                            <p className={bem.element('cart-tech')}>
                                React, Redux, React Native
                            </p>
                            <p className={bem.element('cart-tags')}>
                                {this.renderTags([
                                    'HTML5', 'CSS3', 'SASS', 'LESS', 'Pug', 'Canvas', 'ES6', 'TypeScript', 'Bootstrap',
                                    'Webpack', 'Jii', 'Dojo', 'Dojo Mobile', 'Ext JS', 'Sencha Touch', 'RequireJS',
                                    'Raphaël', 'jQuery UI, Mobile', 'WebSocket', 'SockJS', 'Socket.io', 'Backbone', 'Marionette',
                                    'Lodash', 'Axios', 'Moment.js', 'GraphQL',
                                ])}
                            </p>
                        </div>
                        <div className={bem(bem.element('cart'))}>
                            <h3 className={bem.element('cart-title')}>
                                Mobile & Desktop
                            </h3>
                            <p className={bem.element('cart-tech')}>
                                React Native, Electron
                            </p>
                            <p className={bem.element('cart-tags')}>
                                {this.renderTags([
                                    'Phonegap', 'Cordova', 'Apple Push Notification', 'Firebase (Google) Cloud Messaging',
                                    'NW (Node-webkit)', 'Appcelerator Titanium',
                                ])}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderTags(tags) {
        return tags.map((tag, index) => (
            <span key={index}>{tag}</span>
        ));
    }

}
