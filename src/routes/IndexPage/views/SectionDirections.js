import React from 'react';

import {html} from 'components';

import './SectionDirections.scss';
import ProjectCard from 'shared/ProjectCard/ProjectCard';
import Button from 'yii-steroids/ui/form/Button';

const bem = html.bem('SectionDirections');

export default class SectionDirections extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container'>
                    <h2>
                        <span>
                            02
                        </span>
                        Что делаем?
                    </h2>
                    <div className='row'>
                        <div className='col-7'>
                            <h3>
                                Криптовалюта
                            </h3>
                            <ul>
                                <li>
                                    Биржа криптовалют
                                    <p>
                                        С нуля создали биржу на 60+ валютных пар, масштабируемую и работающую под
                                        нагрузками. Поддерживаются Limit и Market ордера, данные обновляются по
                                        реалтайм.
                                        <br/>В продакшене выполняются десятки ордеров в секунду.
                                    </p>
                                </li>
                                <li>
                                    Облачный майнинг
                                    <p>
                                        Создали сервис для покупки мощности и начисления наград за майнинг.
                                    </p>
                                </li>
                                <li>
                                    Пополнение и вывод криптовалюты на сайте
                                    <p>
                                        Горячие кошельки генерируют реальные депозитные адреса, через которые
                                        происходит прием денег от пользователя. Поддерживаются Bitcoin,
                                        Litecoin, Dash, Dogecoin, Qtum, Monero, Ethereum, Ethereum Classic,
                                        Ether zero и их токены.
                                    </p>
                                </li>
                                <li>
                                    Web 3.0: Waves блокчейн и контракт в качестве бекенда
                                    <p>
                                        Подпись транзакций прямо в браузере, реалтайм обновление данных контракта.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-5'>
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
                <div className={bem.element('bg')}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5'>
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
                            <div className='col-7'>
                                <h3>
                                    Сайты и сервисы
                                </h3>
                                <ul>
                                    <li>
                                        Highload & Realtime
                                        <p>
                                            Современные технологии и накопленный опыт позволяют нам быстро и
                                            профессионально
                                            создавать сложные, горизонтально масштабируемые приложения, данные которых
                                            обновляются в режиме реального времени
                                        </p>
                                    </li>
                                    <li>
                                        Биллинги, личные кабинеты
                                        <p>
                                            Профиль пользователя, несколько счетов, прием платежей и управление
                                            средствами
                                            — это то, что есть практически в любом нашем проекте. За годы работ у нас
                                            сформировались безопасные и проверенные решения в этой сфере.
                                        </p>
                                    </li>
                                    <li>
                                        CRM, ERP и автоматизация
                                        <p>
                                            Наш опыт включает создание систем управления задачами, расписаниями, учет
                                            товаров, складов, автоматизацию бизнес процессов компаний
                                        </p>
                                    </li>
                                    <li>
                                        Аналитика, мониторинг и поддержка
                                        <p>
                                            Мониторинг серверов и сбор статистических данных и данных об ошибках
                                            позволяет
                                            нашим приложениям работать с минимальными перебоями.напрямую, либо через
                                            специальный кеш-сервер, реализованный тоже нами.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-7'>
                            <h3>
                                Интеграция и API
                            </h3>
                            <ul>
                                <li>
                                    Платежные шлюзы
                                    <p>
                                        Мы интегрируем Ваш продукт с любыми платежными системами с возможностью
                                        их подмены или переключения.
                                        <br/>Robokassa, PayPal, AdvCash, PayInPayOut, Stripe, PayAnyWay, Portmone.com,
                                        Монета.ру, NextPay, RedSys — это то, с чем работают созданные нами
                                        приложения уже сегодня
                                    </p>
                                </li>
                                <li>
                                    Социальные сети
                                    <p>
                                        Авторизация и получение данных из множества соц. сетей: Facebook, Vk, Google,
                                        Twitter, Ok, FullContact, Steam, ...
                                    </p>
                                </li>
                                <li>
                                    Карты
                                    <p>
                                        Работа со слоями и данными в Google Maps, Яндекс.Карты, 2GIS
                                    </p>
                                </li>
                                <li>
                                    SMS и Push уведомления
                                    <p>
                                        Отправка Apple и Google уведомлений на телефоны и браузеры, а так же отправка
                                        SMS через сервисы: Sms.ru, TextMagic, Twilio, Easysms, ...
                                    </p>
                                </li>
                                <li>
                                    API со Swagger документацией по коду
                                    <p>
                                        Мы создаем собственное REST API, документация которого автоматически
                                        собирается по коду в swagger формате.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-5'>
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
                                title='[NDA]'
                                description='Бекенд и Swagger документация сервиса для поиска перевозчиков и грузов'
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
            </div>
        );
    }

}
