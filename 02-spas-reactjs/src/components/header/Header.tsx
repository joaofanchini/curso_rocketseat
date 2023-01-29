import logoTimer from '../../assets/logo-timer.svg';

import {HeaderContainer} from './HeaderStyles';
import {Scroll, Timer} from 'phosphor-react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return <HeaderContainer>
        <img src={logoTimer} alt='Logo do timer'/>
        <nav>
            {/*Componente do react-router-dom para interagir com o elemento Anchor*/}
            <NavLink to={'/'}><Timer size={24}/></NavLink>
            <NavLink to={'/history'}><Scroll size={24}/></NavLink>
        </nav>
    </HeaderContainer>;
};

export default Header;