import React , {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HeaderAllMenu , HeaderNavList } from "../../assets/style/layout/headerStyle"

const HeaderAllLayer = (props) => {
    const {close ,isOpen } = props;

    return (    
        <HeaderAllMenu className={isOpen ? 'header-all-menu on' : 'header-all-menu'}>
            <button type="button" className="remove" onClick={close}><span></span><span></span></button>
            <HeaderNavList>
                <li><Link to="/posting/postingList">Posting</Link></li>
                <li><Link to="">Portfolio</Link></li>
                <li><Link to="">Career</Link></li>
            </HeaderNavList>
        </HeaderAllMenu>
    );
}

export default HeaderAllLayer;
