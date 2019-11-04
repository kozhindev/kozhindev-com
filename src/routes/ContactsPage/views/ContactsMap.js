import * as React from 'react';
import {connect} from 'react-redux';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

import iconMap from 'static/icon-map.svg';
import mapStyles from './mapStyles.json';

@withScriptjs
@withGoogleMap
@connect(
    () => ({
        isMobile: window.innerWidth <= 768,
    })
)
export default class ContactsMap extends React.PureComponent {

    render() {

        const center = this.props.isMobile
            ? {
                lat: 56.028271,
                lng: 92.814224,
            }
            : {
                lat: 56.005,
                lng: 92.795,
            };

        return (
            <GoogleMap
                defaultZoom={13}
                center={center}
                defaultOptions={{
                    disableDefaultUI: true,
                    draggable: true,
                    keyboardShortcuts: false,
                    scaleControl: true,
                    scrollwheel: true,
                    styles: mapStyles,
                }}
            >
                <Marker
                    icon={{
                        url: iconMap,
                    }}
                    position={{
                        lat: 56.0094409,
                        lng: 92.8141845
                    }}
                />
            </GoogleMap>
        );
    }
}
