import React , {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HeaderAllMenu , HeaderNavList } from "../../assets/style/layout/headerStyle"

const HeaderAllLayer = (props) => {
    const {close ,isOpen } = props;

    return (    
        <HeaderAllMenu className={isOpen ? 'header-all-menu on' : 'header-all-menu'}>
            <button type="button" className="remove" onClick={close}><span></span><span></span></button>
            <HeaderNavList>
                <li><Link to="">HTML</Link></li>
                <li><Link to="">CSS</Link></li>
                <li><Link to="">JAVASCRIPT</Link></li>
                <li><Link to="">REACT</Link></li>
                <li><Link to="">NODE</Link></li>
                <li><Link to="">CANVAS</Link></li>
            </HeaderNavList>
        </HeaderAllMenu>
    );
}

export default HeaderAllLayer;
