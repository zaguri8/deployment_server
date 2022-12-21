import { Fragment } from "react";
import AdSense from 'react-adsense';
import React from "react";
export default class GoogleAdsWrapper extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Fragment>
                {this.props.children}
                <AdSense.Google
                    client="ca-pub-7861960382823701"
                    slot="9876543210"
                    style={{ display: 'block' }}
                    format="auto"
                    responsive="true"
                />
            </Fragment>
        );
    }
}