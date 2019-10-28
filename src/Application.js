import React from 'react';
import Router from 'yii-steroids/ui/nav/Router';

import {ui} from 'components';
import Layout from 'shared/Layout';
import routes from './routes';



ui.addViews(require.context('yii-steroids/ui', true, /View.js$/));
ui.addViews(require.context('./ui', true, /View.js$/));


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
