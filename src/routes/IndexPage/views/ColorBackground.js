import React from 'react';

import {html} from 'components';

import './ColorBackground.scss';

const bem = html.bem('ColorBackground');

export default class ColorBackground extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}/>
        );
    }

}
