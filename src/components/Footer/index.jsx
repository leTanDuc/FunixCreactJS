import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <>
        <div className="container-fluid color-background text-dark footer">
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <h4>Our Address</h4>
                        <p>121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                        <i className="fa fa-phone" aria-hidden="true"></i>: +852 1234 5678<br/>
                        <i className="fa fa-fax" aria-hidden="true"></i>: +852 8765 4321<br/>
                        <i className="fa fa-envelope" aria-hidden="true"></i>: <a href="confusion@food.net">confusion@food.net</a></p>
                    </div>
                    <div className="col-md-4 align-self-center icon-brand">
                        <i className="fa fa-google-plus-square"></i>
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-linkedin-square"></i>
                        <i className="fa fa-twitter-square"></i>
                        <i className="fa fa-youtube-square"></i>
                        <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="copy-right">
                    <i className="fa fa-copyright" aria-hidden="true"> Copyright 2018 Ristorante Con Fusion</i> 
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Footer;