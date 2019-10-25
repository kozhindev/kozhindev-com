import React from 'react';

import {html} from 'components';

import './SectionAbout.scss';

const bem = html.bem('SectionAbout');

export default class SectionAbout extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container'>
                    <h2>
                        <span>
                            01
                        </span>
                        Кто мы?
                    </h2>
                    <p>
                        KozhinDev — команда сильных бекенд/фронтенд веб-разработчиков.<br/> Фокусируемся на решении сложных и нетиповых задач.
                    </p>
                </div>
            </div>
        );
    }

}
