import React from 'react';

import {html} from 'components';

import './ProjectsPage.scss';

const bem = html.bem('ProjectsPage');

export default class ProjectsPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <div className='container'>
                    <h1>
                        {__('Наши проекты')}
                    </h1>
                </div>
            </div>
        );
    }
}
