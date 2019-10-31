import React from 'react';
import Form from 'yii-steroids/ui/form/Form';
import InputField from 'yii-steroids/ui/form/InputField';
import TextField from 'yii-steroids/ui/form/TextField';
import Button from 'yii-steroids/ui/form/Button';

import {html} from 'components';

import './SectionFeedback.scss';
import contacts from 'data/contacts';

const bem = html.bem('SectionFeedback');

export default class SectionFeedback extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 mb-4 mb-lg-0'>
                            <h2>
                                <span>
                                    05
                                </span>
                                Свяжитесь с нами
                            </h2>
                            <ul className={'list-unstyled'}>
                                {contacts.map((item, index) => (
                                    <li
                                        key={index}
                                        className={bem.element('item')}
                                    >
                                        <span className={bem.element('item-label')}>
                                            {item.label}
                                        </span>
                                        <a
                                            href={item.href}
                                            target='_blank'
                                            className={bem.element('item-link')}
                                        >
                                            {item.value}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex'>
                            <Form
                                formId='SectionFeedback'
                                className={'d-flex flex-column w-100 ml-0 ml-lg-4'}
                            >
                                <InputField
                                    attribute='email'
                                    placeholder='you@email.com'
                                    className={bem.element('input-field')}
                                />
                                <span className={bem.element('text-field-wrap')}>
                                    <TextField
                                        attribute='text'
                                        placeholder='Хочу обсудить проект...'
                                        className={bem.element('text-field')}
                                    />
                                </span>
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
