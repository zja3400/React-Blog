import React , {useState} from "react";
import { Link } from "react-router-dom";
import { HeaderArea, HeaderLogo, HeaderMainMenu } from "../../assets/style/layout/headerStyle"
import HeaderAllLayer from "../../components/layout/HeaderAllLayer";
import headerLogo from "../../assets/images/default/blog-logo.svg"


const Header = () => {
	const [layerOpen, setLayerOpen] = useState(false);	
	const [layerBtn, setBtnActive] = useState(false);

	const toggleMenu = () => {		
        setLayerOpen(isOpen => !isOpen);
    }	

	const closeMenu = () => {		
        setLayerOpen(false);
    }		

	const toggleActive = () => {
	  setBtnActive((prev) => {
		return !prev;
	  });
	};

    return (
        <HeaderArea className="header" id="header">
            <HeaderLogo className="header-logo"><Link to="/main/Main"><img src={headerLogo} alt="logo" /></Link></HeaderLogo>
            <HeaderMainMenu type="button" className="header-main-menu" onClick={()=>{toggleMenu();toggleActive()}}><span></span><span></span></HeaderMainMenu>  
            <HeaderAllLayer isOpen={layerOpen} close={closeMenu} />
        </HeaderArea>
    );
}

export default Header;
