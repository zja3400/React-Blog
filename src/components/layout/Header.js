import React , {useState} from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { HeaderArea, HeaderLogo, HeaderAllMenu, HeaderMainMenu } from "../../assets/style/layout/headerStyle"
import headerLogo from "../../assets/images/default/blog-logo.svg"


const Header = () => {
    const [layerOpen, setLayerOpen] = useState(false);	
	const [layerBtn, setBtnActive] = useState(false);

	const toggleMenu = () => {		
        setLayerOpen(isOpen => !isOpen);
    }	

	const toggleActive = () => {
	  setBtnActive((prev) => {
		return !prev;
	  });
	};

    return (
        <HeaderArea className="header" id="header">
            <HeaderLogo className="header-logo"><Link to="/"><img src={headerLogo} alt="logo" /></Link></HeaderLogo>
            <HeaderMainMenu type="button" className={"header-main-menu" + (layerBtn ? " on" : "")}><span></span><span></span></HeaderMainMenu>  
            <HeaderAllMenu className="header-all-menu">
                <button type="button" className="remove"><span></span><span></span></button>
                <ul>
                    <li><Link to="">HTML</Link></li>
                    <li><Link to="">CSS</Link></li>
                    <li><Link to="">JAVASCRIPT</Link></li>
                    <li><Link to="">REACT</Link></li>
                    <li><Link to="">NODE</Link></li>
                    <li><Link to="">CANVAS</Link></li>
                </ul>
            </HeaderAllMenu>
        </HeaderArea>
    );
}

export default Header;
