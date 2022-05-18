import React from "react";
import './Footer.scss'
import facebook from '../../../assets/facebook.svg'
import linkedin from '../../../assets/linkedin.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram.svg'


const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer-copyright'}>
                <p className={'footer-copyright-text'}>©2022 Digital Booking</p>
            </div>
            <ul className={'footer-social'}>
                <li>
                    <a href={'#facebook'}>
                        <img src={facebook} alt={'Facebook icon'} />
                    </a>
                </li>
                <li>
                    <a href={'#facebook'}>
                        <img src={linkedin} alt={'Linkedin icon'} />
                    </a>
                </li>
                <li>
                    <a href={'#facebook'}>
                        <img src={twitter} alt={'Twitter icon'} />
                    </a>
                </li>
                <li>
                    <a href={'#facebook'}>
                        <img src={instagram} alt={'Instagram icon'} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;