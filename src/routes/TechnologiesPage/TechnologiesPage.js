import React from 'react';

import {html} from 'components';

import './TechnologiesPage.scss';

const bem = html.bem('TechnologiesPage');

export default class TechnologiesPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container-fluid'>
                    <h1>
                        {__('Технологии')}
                    </h1>
                    <p>
                        {__('Мы используем технологии с открытым исходным кодом, которые в большинстве случаев являются бесплатными.')}
                    </p>
                    <p>
                        {__('Основными языками программирования для нас являются PHP и JavaScript (включая Node.js), хотя они не являются ограничением.')}
                        <br/>{__('У нас богатый опыт профилирования и оптимизации PHP+JS приложений под высокие нагрузки.')}
                    </p>
                    <h2>
                        {__('Карта технологий')}
                    </h2>
                    <p>
                        {__('Ниже представлен список терминов/технологий/названий библиотек и фреймворков, которые мы используем при разработке. Наличие в списке той или иной технологии означает что мы не только хорошо ее знаем, но и использовали в проектах.')}
                    </p>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>
                                    {__('Языки программирования')}
                                </th>
                                <td>
                                    <p>
                                        {this.renderTags([
                                            'PHP 7', 'JavaScript', 'TypeScript', 'NodeJS', 'Bash',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>{__('Фреймворки и библиотеки')}</th>
                                <td>
                                    <p>
                                        <strong>{__('JavaScript')}</strong>
                                        {this.renderTags([
                                            'ReactJS', 'Redux', 'HighCharts', 'Jii', 'Dojo', 'Dojo Mobile', 'Ext JS', 'Sencha Touch', 'RequireJS',
                                            'Raphaël', 'Reflux', 'jQuery', 'jQuery UI', 'jQuery Mobile', 'WebSocket', 'SockJS', 'Socket.io', 'Backbone', 'Marionette',
                                            'Lodash', 'Axios', 'Moment.js', 'GraphQL', 'Knockout',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Node JS')}</strong>
                                        {this.renderTags([
                                            'Express', 'Redis', 'NodeUnit', 'WebSocket',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('PHP')}</strong>
                                        {this.renderTags([
                                            'Yii', 'Yii 2', 'Cake PHP', 'Zend', 'Symfony',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Realtime, Comet')}</strong>
                                        {this.renderTags([
                                            'SockJS', 'Socket.io', 'Realplexor',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Документирование')}</strong>
                                        {this.renderTags([
                                            'Swagger',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('СУБД')}
                                </th>
                                <td>
                                    <p>
                                        {this.renderTags([
                                            'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Sphinx', 'Elastic',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>{__('Внешние сервисы')}</th>
                                <td>
                                    <p>
                                        <strong>{__('Облачные сервисы')}</strong>
                                        {this.renderTags([
                                            'Amazone WS', 'Яндекс.Облако',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Платёжные системы')}</strong>
                                        {this.renderTags([
                                            'Яндекс.Деньги', 'Qiwi банк', 'PayPal', 'AdvCash', 'Portmone.com',
                                            'Robokassa', 'Stripe', 'Монета.Ру', 'Payin-Payout',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('SMS и Push Notifications')}</strong>
                                        {this.renderTags([
                                            'Sms.ru', 'EasySMS',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Социальные сети (OAuth, Graph API)')}</strong>
                                        {this.renderTags([
                                            'Vk', 'Facebook', 'Twitter', 'Google', 'Одноклассники', 'Steam', 'FullContact',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Карты')}</strong>
                                        {this.renderTags([
                                            'Google Maps', 'Яндекс.Карты', '2Gis', 'OpenStreetMap',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('Блокчейны')}
                                </th>
                                <td>
                                    <p>
                                        {this.renderTags([
                                            'Waves', 'Waves Contracts', 'Bitcoin', 'Litecoin', 'Dash', 'Dogecoin', 'Qtum',
                                            'Monero', 'Ethereum', 'Ethereum Classic', 'Ether zero', 'Ethereum Tokens',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('Системы сборки')}
                                </th>
                                <td>
                                    <p>
                                        <strong>{__('AMD')}</strong>
                                        {this.renderTags([
                                            'RequireJS',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('CommonJS')}</strong>
                                        {this.renderTags([
                                            'Webpack', 'Babel', 'Gulp', 'Grunt', 'Browserify',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('Деплой (CI/CD)')}
                                </th>
                                <td>
                                    <p>
                                        {this.renderTags([
                                            'Kubernetes', 'Docker', 'Gitlab CI', 'Jenkins', 'Bash/Shell scripts',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('Вёрстка')}
                                </th>
                                <td>
                                    <p>
                                        {this.renderTags([
                                            'HTML5', 'CSS3', 'LESS', 'SASS', 'Bootstrap', 'Адаптивная', 'Резиновая',
                                            'Pixel Perfect',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('Протоколы, форматы данных')}
                                </th>
                                <td>
                                    <p>
                                        {this.renderTags([
                                            'HTTPS', 'AJAX', 'REST', 'JSON', 'JSON-P', 'JSON-RPC', 'XML', 'WebDAV', 'Comet',
                                            'Long-pooling', 'WebSockets', 'PHP-Java-Bridge', 'WebRTC',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('Администрирование')}
                                </th>
                                <td>
                                    <p>
                                        <strong>{__('Виртуализация')}</strong>
                                        {this.renderTags([
                                            'Kubernetes', 'Docker', 'LXC', 'Proxmox', 'Portainer',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Мониторинг')}</strong>
                                        {this.renderTags([
                                            'Munin', 'Grafana', 'Prometheus', 'Zabbix',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('Веб сервер')}</strong>
                                        {this.renderTags([
                                            'CloudFlare', 'Nginx', 'php-fpm', 'Nginx-RTMP', 'Apache', 'Memcache', 'XCache', 'APC',
                                            'Opcache', 'Jboss',
                                        ])}
                                    </p>
                                    <p>
                                        <strong>{__('OS')}</strong>
                                        {this.renderTags([
                                            'Ubuntu', 'Debian', 'CentOS', 'Gentoo',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    {__('Трекинговые системы')}
                                </th>
                                <td>
                                    <p>
                                        {this.renderTags([
                                            'Gitlab', 'Jira', 'Github', 'Trello', 'Toggl', 'Trac', 'Redmine', 'ChiliProject',
                                        ])}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
