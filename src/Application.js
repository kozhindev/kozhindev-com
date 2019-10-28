import React from 'react';
import Router from 'yii-steroids/ui/nav/Router';

import {ui} from 'components';
import Layout from 'shared/Layout';
import routes from './routes';

ui.addViews({
    'form.InputFieldView': require('yii-steroids/ui/form/InputField/InputFieldView').default,
    'form.TextFieldView': require('yii-steroids/ui/form/TextField/TextFieldView').default,
    'form.ButtonView': require('./ui/form/Button/ButtonView').default,
});

export default class Application extends React.PureComponent {

    render() {
        return (
            <Router
                wrapperView={Layout}
                routes={routes}
            />
        );
    }
}
