import React from 'react';

import {html} from 'components';

import './SectionGeneral.scss';
import ColorBackground from 'routes/IndexPage/views/ColorBackground';
import WavesEffect from 'routes/IndexPage/views/WavesEffect';

const bem = html.bem('SectionGeneral');

export default class SectionGeneral extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <ColorBackground/>
                <WavesEffect/>
                <div className={bem.element('slogan')}>
                    <h1>
                        {__('Создаём')}
                        <br />{__('сложные')}
                        <br />{__('веб-приложения')}
                    </h1>
                </div>
                <a
                    href='#'
                    className={bem.element('scroll-link')}
                />
            </div>
        );
    }

}
