import logoTimer from '../../assets/logo-timer.svg';

import {HeaderContainer} from './HeaderStyles';
import {Scroll, Timer} from 'phosphor-react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return <HeaderContainer>
        <img src={logoTimer} alt='Logo do timer' width={40} height={40}/>
        <nav>
            {/*Componente do react-router-dom para interagir com o elemento Anchor*/}
            <NavLink to={'/'} title='Temporizador'><Timer size={24}/></NavLink>
            <NavLink to={'/history'} title='Histórico'><Scroll size={24}/></NavLink>
        </nav>
    </HeaderContainer>;
};

export default Header;