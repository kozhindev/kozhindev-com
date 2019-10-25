import * as React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

import iconMap from 'static/icon-map.svg';
import mapStyles from './mapStyles.json';

@withScriptjs
@withGoogleMap
export default class ContactMap extends React.PureComponent {

    render() {
        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{
                    lat: 56.012,
                    lng: 92.790,
                }}
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
