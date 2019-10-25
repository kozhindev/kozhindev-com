import React from 'react';

import {html} from 'components';

import './IndexPage.scss';
import SectionGeneral from 'routes/IndexPage/views/SectionGeneral';
import SectionAbout from 'routes/IndexPage/views/SectionAbout';
import SectionDirections from 'routes/IndexPage/views/SectionDirections';
import SectionTechnologies from 'routes/IndexPage/views/SectionTechnologies';
import SectionOpenSource from 'routes/IndexPage/views/SectionOpenSource';

const bem = html.bem('IndexPage');

export default class IndexPage extends React.PureComponent {

    render() {
        return (
            <div className={bem.block()}>
                <SectionGeneral/>
                <SectionAbout/>
                <SectionDirections/>
                <SectionOpenSource/>
                <SectionTechnologies/>
            </div>
        );
    }
}
