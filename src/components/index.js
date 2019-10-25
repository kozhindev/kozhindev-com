import ClientStorageComponent from 'yii-steroids/components/ClientStorageComponent';
import HttpComponent from 'yii-steroids/components/HttpComponent';
import HtmlComponent from 'yii-steroids/components/HtmlComponent';
import LocaleComponent from 'yii-steroids/components/LocaleComponent';
import ResourceComponent from 'yii-steroids/components/ResourceComponent';
import StoreComponent from 'yii-steroids/components/StoreComponent';
import UiComponent from 'yii-steroids/components/UiComponent';

// Create instances
const clientStorage = new ClientStorageComponent();
const http = new HttpComponent();
const html = new HtmlComponent();
const locale = new LocaleComponent();
const resource = new ResourceComponent();
const store = new StoreComponent();
const ui = new UiComponent();

export {
    clientStorage,
    http,
    html,
    locale,
    resource,
    store,
    ui,
};
