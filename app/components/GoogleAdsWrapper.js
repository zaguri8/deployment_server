import { Fragment } from "react";
import React from "react";
export default class GoogleAdsWrapper extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <Fragment>
                {this.props.children}
                {/* <ins className="adsbygoogle"
                    style={{ "display": "block" }}
                    data-ad-client="ca-pub-7861960382823701"
                    data-ad-slot="7427579246"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins> */}
            </Fragment>
        );
    }
}