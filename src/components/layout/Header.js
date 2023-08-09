import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HeaderArea, HeaderLogo, HeaderNav, HeaderNavList, HeaderMainMenu } from "../../assets/style/layout/headerStyle"
import headerLogo from "../../assets/images/default/blog-logo.svg"


const Header = () => {
    return (
        <HeaderArea className="header" id="header">
            <HeaderLogo className="logo"><Link to="/"><img src={headerLogo} alt="logo" /></Link></HeaderLogo>
            {/* <HeaderNav className="nav" id="nav">
                <HeaderNavList>
                    <li><Link to="/">메뉴</Link></li>
                    <li><Link to="/">메뉴</Link></li>
                    <li><Link to="/">메뉴</Link></li>
                </HeaderNavList>
            </HeaderNav> */}
            <HeaderMainMenu type="button" className="main-menu"><span></span><span></span></HeaderMainMenu>  
        </HeaderArea>
    );
}

export default Header;
