import { Fragment } from "react";
import React from "react";
export default class GoogleAdsWrapper extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const installGoogleAds = () => {
            const elem = document.createElement("script");
            elem.src =
                "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7861960382823701";
            elem.async = true;
            elem.defer = true;
            document.body.insertBefore(elem, document.body.firstChild);
        };
        installGoogleAds();
        setTimeout(() =>  {
            (adsbygoogle = window.adsbygoogle || []).push({});

    }, 1000)
    }

    render() {
        return (
            <Fragment>
                {this.props.children}
                <ins className='adsbygoogle'
                    style={{ display: 'block' }}
                    data-ad-client='ca-pub-7861960382823701'
                    data-ad-slot='9876543210'
                    data-ad-format='auto' />
            </Fragment>
        );
    }
}