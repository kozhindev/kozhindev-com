import React from 'react';
// import PropTypes from 'prop-types';
import ModalWrapper from 'yii-steroids/ui/modal/ModalWrapper';
import {STATUS_RENDER_ERROR} from 'yii-steroids/ui/layoutHoc';

import {html} from 'components';
import Header from 'shared/Header';
import Footer from 'shared/Footer';

import './Layout.scss';

const bem = html.bem('Layout');


export default class Layout extends React.PureComponent {

    // static propTypes = {
    //
    // };

    render() {
        if (this.props.status === STATUS_RENDER_ERROR) {
            return null;
        }

        return (
            <div className={bem.block()}>
                <Header/>
                <main className={bem.element('content')}>
                    {this.props.children}
                </main>
                <Footer/>
                <ModalWrapper/>
            </div>
        );
    }
}
