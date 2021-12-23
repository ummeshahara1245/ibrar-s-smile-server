import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed" style={{
                backgroundColor: '#fa8ea3', color: '#f3f0bf'
            }}>

                <div className="footer-left">

                    <h3 style={{
                        color: '#f3f0bf'
                    }}>Ibrar's <span className="text-white">Smile</span></h3>

                    <p className="footer-links" style={{
                        color: '#f3f0bf'
                    }}>
                        <a href="#">Home</a>
                        ·
                        <a href="#">Blog</a>
                        ·
                        <a href="#">Pricing</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name" style={{
                        color: '#f3f0bf'
                    }}>Ibrar's Smile &copy; 2021</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker" style={{
                            color: '#f3f0bf'
                        }}></i>
                        <p><span style={{
                            color: '#f3f0bf'
                        }}>21 Revolution Street</span> Dhaka, Bangladesh</p>
                    </div>

                    <div>
                        <i className="fa fa-phone" style={{
                            color: '#f3f0bf'
                        }}></i>
                        <p style={{
                            color: '#f3f0bf'
                        }}>+1 555 123456</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope" style={{
                            color: '#f3f0bf'
                        }}></i>
                        <p><a style={{
                            color: '#f3f0bf'
                        }} href="mailto:support@company.com">contact@ibrar'ssmile.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about text-white">
                        <span style={{
                            color: '#f3f0bf'
                        }}>About Ibrar's Smile</span>
                        Ibrar's Smile is a most popular baby  shop  provider in bangladesh for our best product
                    </p>

                    <div className="footer-icons" >

                        <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/ifaz5?tab=repositories"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;