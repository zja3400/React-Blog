import React from 'react';
import { FooterArea , FooterCopy } from '../../assets/style/layout/footerStyle'

const Footer = () => {
    return (
        <FooterArea className="footer" id="footer">
            <FooterCopy className='copy-text'>ⓒ 2023. <b>LOLO BLOG</b> Inc. All rights reserved.</FooterCopy>
        </FooterArea>
    );
}

export default Footer;
