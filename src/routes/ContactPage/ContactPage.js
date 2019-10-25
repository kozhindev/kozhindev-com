import React from 'react';

import {html} from 'components';

import './ContactPage.scss';
import ContactMap from './views/ContactMap';
import contacts from 'data/contacts';

const bem = html.bem('ContactPage');

export default class ContactPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <ContactMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDSYz5Nmb8VhhGuqZQNYs0dc4gp4heHEcs"
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
                <div className={bem(bem.element('content'), 'container')}>
                    <div className={bem.element('card')}>
                        <ul>
                            {contacts.map((item, index) => (
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
                    </div>
                </div>
            </div>
        );
    }
}
