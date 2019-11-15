import React from 'react';
import {html} from 'components';
import './ContactsPage.scss';
import ContactMap from './views/ContactsMap';
import contacts from 'data/contacts';
import githubIcon from 'static/icon-github.svg';
import vkIcon from 'static/icon-vk.svg';
import instagramIcon from 'static/icon-instagram.svg';


const bem = html.bem('ContactsPage');

export default class ContactsPage extends React.PureComponent {

    render() {
        const icons = {
            vk: vkIcon,
            github: githubIcon,
            instagram: instagramIcon,
        };
        return (
            <div className={bem.block()}>
                <ContactMap
                    googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDSYz5Nmb8VhhGuqZQNYs0dc4gp4heHEcs'
                    loadingElement={(
                        <div
                            className={bem.element('map-loading')}
                            style={{ height: '100%' }}
                        />
                    )}
                    containerElement={(
                        <div
                            className={bem.element('map-container')}
                            style={{ height: '100%' }}
                        />
                    )}
                    mapElement={(
                        <div
                            className={bem.element('map-element')}
                            style={{ height: '100%' }}
                        />
                    )}
                />
                <div className={bem(bem.element('content'), 'container-fluid')}>
                    <div className={bem.element('card')}>
                        <ul className={bem.element('labels')}>
                            {contacts.filter(item => !icons[item.id]).map((item, index) => (
                                <li key={index}>
                                    <span>
                                        {item.label}
                                    </span>
                                    <a
                                        href={item.href}
                                        target='_blank'
                                    >
                                        {item.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className={bem.element('icons')}>
                            {contacts.filter(item => icons[item.id]).map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        target='_blank'
                                    >
                                        <img src={icons[item.id]} alt={item.label}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
