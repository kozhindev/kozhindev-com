import React from 'react';

import {html} from 'components';

import './SectionFeedback.scss';
import Form from 'yii-steroids/ui/form/Form';
import InputField from 'yii-steroids/ui/form/InputField';
import TextField from 'yii-steroids/ui/form/TextField';
import Button from 'yii-steroids/ui/form/Button';

const bem = html.bem('SectionFeedback');

export default class SectionFeedback extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container'>
                    <h2>
                        <span>
                            05
                        </span>
                        Свяжитесь с нами
                    </h2>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <span>Telegram</span>
                                    <a href='https://t.me/kozhindev'>
                                        @kozhindev
                                    </a>
                                </li>
                                <li>
                                    <span>Skype</span>
                                    <a href='skype:affka.kras?chat'>
                                        affka.kras
                                    </a>
                                </li>
                                <li>
                                    <span>Телефон</span>
                                    <a href='tel:+79509806194'>
                                        +7 950 980 6194
                                    </a>
                                </li>
                                <li>
                                    <span>E-mail</span>
                                    <a href='mailto:hello@kozhindev.com'>
                                        hello@kozhindev.com
                                    </a>
                                </li>
                                <li>
                                    <span>GitHub</span>
                                    <a
                                        href='https://github.com/kozhindev'
                                        target='_blank'
                                    >
                                        github.com/kozhindev
                                    </a>
                                </li>
                                <li>
                                    <span>Vk</span>
                                    <a
                                        href='https://vk.com/affka'
                                        target='_blank'
                                    >
                                        vk.com/affka
                                    </a>
                                </li>
                                <li>
                                    <span>Instagram</span>
                                    <a
                                        href='https://instagram.com/kozhindev_com'
                                        target='_blank'
                                    >
                                        instagram.com/kozhindev_com
                                    </a>
                                </li>
                                <li>
                                    <span>Адрес</span>
                                    <a
                                        href='https://yandex.ru/maps/62/krasnoyarsk/?ll=92.827486%2C56.011696&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Forg%3Foid%3D51258529975&z=13'
                                        target='_blank'
                                    >
                                        г. Красноярск, ул. Ладо Кецховели, д. 22а, офис 12-15
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <Form
                                formId='SectionFeedback'
                            >
                                <InputField
                                    attribute='email'
                                    placeholder='you@email.com'
                                />
                                <TextField
                                    attribute='email'
                                    placeholder='Хочу обсудить проект...'
                                />
                                <Button
                                    type='submit'
                                    label='Свяжитесь со мной'
                                />
                            </Form>
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
