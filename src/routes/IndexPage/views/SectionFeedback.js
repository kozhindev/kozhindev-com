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
