import {HeaderContainer} from "./HeaderStyles";
import {Scroll, Timer} from "phosphor-react";
import {NavLink} from "react-router-dom";
import Home from "../../router/pages/Home";

const Header = () => {
    return <HeaderContainer>
        <span>logo</span>
        <nav>
            {/*Componente do react-router-dom para interagir com o elemento Anchor*/}
            <NavLink to={'/'}><Timer size={24}/></NavLink>
            <NavLink to={'/history'}><Scroll size={24}/></NavLink>
        </nav>
    </HeaderContainer>
}

export default Header;