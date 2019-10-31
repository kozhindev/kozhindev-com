import React from 'react';
import {html} from 'components';
import List from 'shared/List'
import './SectionDirections.scss';
import ProjectCard from 'shared/ProjectCard/ProjectCard';
import Button from 'yii-steroids/ui/form/Button';

const bem = html.bem('SectionDirections');

const CRYPTO = {
    title: 'Криптовалюта',
    items: [
        {
            title: 'Биржа криптовалют',
            description: 'С нуля создали биржу на 60+ валютных пар, масштабируемую и работающую под нагрузками. Поддерживаются Limit и Market ордера, данные обновляются по реалтайм. В продакшене выполняются десятки ордеров в секунду'
        },
        {
            title: 'Облачный майнинг',
            description: 'Создали сервис для покупки мощности и начисления наград за майнинг.'
        },
        {
            title: 'Пополнение и вывод криптовалюты на сайте',
            description: 'Горячие кошельки генерируют реальные депозитные адреса, через которые происходит прием денег от пользователя. Поддерживаются Bitcoin, Litecoin, Dash, Dogecoin, Qtum, Monero, Ethereum, Ethereum Classic, Ether zero и их токены.'
        },
        {
            title: 'Web 3.0: Waves блокчейн и контракт в качестве бекенда',
            description: 'Подпись транзакций прямо в браузере, реалтайм обновление данных контракта.'
        }
    ]
};

const SITES = {
    title: 'Сайты и сервисы',
    items: [
        {
            title: 'Highload & Realtime',
            description: 'Современные технологии и накопленный опыт позволяют нам быстро и профессионально создавать сложные, горизонтально масштабируемые приложения, данные которых обновляются в режиме реального времени'
        },
        {
            title: 'Биллинги, личные кабинеты',
            description: 'Профиль пользователя, несколько счетов, прием платежей и управление средствами — это то, что есть практически в любом нашем проекте. За годы работ у нас сформировались безопасные и проверенные решения в этой сфере.'
        },
        {
            title: 'CRM, ERP и автоматизация',
            description: 'Наш опыт включает создание систем управления задачами, расписаниями, учет товаров, складов, автоматизацию бизнес процессов компаний'
        },
        {
            title: 'Аналитика, мониторинг и поддержка',
            description: 'Мониторинг серверов и сбор статистических данных и данных об ошибках позволяет нашим приложениям работать с минимальными перебоями.напрямую, либо через специальный кеш-сервер, реализованный тоже нами.'
        }
    ]
};

const API = {
    title: 'Интеграция и API',
    items: [
        {
            title: 'Платежные шлюзы',
            description: 'Мы интегрируем Ваш продукт с любыми платежными системами с возможностью их подмены или переключения. Robokassa, PayPal, AdvCash, PayInPayOut, Stripe, PayAnyWay, Portmone.com, Монета.ру, NextPay, RedSys — это то, с чем работают созданные нами приложения уже сегодня'
        },
        {
            title: 'Социальные сети',
            description: 'Авторизация и получение данных из множества соц. сетей: Facebook, Vk, Google, Twitter, Ok, FullContact, Steam, ...'
        },
        {
            title: 'Карты',
            description: 'Работа со слоями и данными в Google Maps, Яндекс.Карты, 2GIS'
        },
        {
            title: 'SMS и Push уведомления',
            description: 'Отправка Apple и Google уведомлений на телефоны и браузеры, а так же отправка SMS через сервисы: Sms.ru, TextMagic, Twilio, Easysms, ...'
        },
        {
            title: 'API со Swagger документацией по коду',
            description: 'Мы создаем собственное REST API, документация которого автоматически собирается по коду в swagger формате.'
        }
    ]
};


export default class SectionDirections extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <section className={bem.element('section-crypto')}>
                    <div className='container-fluid'>
                        <h2 className={bem.element('h2')}>
                            <span>
                                02
                            </span>
                            Что делаем?
                        </h2>
                        <div className='row'>
                            <div className='col-lg-7 mb-4 mb-lg-0'>
                                <List
                                    className={bem.element('left-listing')}
                                    list={CRYPTO}
                                />
                            </div>
                            <div className='col-lg-5'>
                                <ProjectCard
                                    name='aliencloud'
                                    title='AlienCloud'
                                    description='Биржа криптовалют и майнинг платформа'
                                />
                                <ProjectCard
                                    name='dao'
                                    title='Waves DAO'
                                    description='Краудфандинговая платформа на основе Waves контрактов'
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className={bem.element('bg')}>
                    <section className={bem.element('section-sites')}>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-5 order-1 order-lg-0'>
                                    <ProjectCard
                                        name='helponclick'
                                        title='HelpOnClick'
                                        description='SaaS сервис Онлайн-консультанта'
                                    />
                                    <ProjectCard
                                        name='vindog'
                                        title='VinDog'
                                        description='Поиск автозапчастей, сервисов и услуг'
                                    />
                                    <ProjectCard
                                        name='ranobe'
                                        title='Ранобэ'
                                        description='Читайте интересные новеллы и ранобэ'
                                    />
                                </div>
                                <div className='col-lg-7 mb-4 mb-lg-0 order-0 order-lg-1'>
                                    <List
                                        className={bem.element('right-listing')}
                                        list={SITES}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className={bem.element('section-api')}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-7 mb-4 mb-lg-0'>
                                <List
                                    className={bem.element('left-listing')}
                                    list={API}
                                />
                            </div>
                            <div className='col-lg-5'>
                                <ProjectCard
                                    name='goldencruises'
                                    title='GoldenCruises'
                                    description='Сервис бронирования и покупки круизов, отелей, машин и авиа перелетов'
                                />
                                <ProjectCard
                                    name='ajaxfilebrowser'
                                    title='WebDAV AJAX Browser'
                                    description='Веб-менеджер файлов для протокола WebDAV'
                                />
                                <ProjectCard
                                    name='nda-cargo-transportation'
                                    title='HurryLorry'
                                    description='REST API сервиса для поиска перевозчиков и грузов'
                                />
                            </div>
                        </div>
                        <div className={bem.element('more-link')}>
                            <Button
                                color='primary'
                                label={__('Больше проектов')}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}
