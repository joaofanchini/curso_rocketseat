import './Header.css'
// @ts-ignore
import logo from '../../assets/logo.svg'

const Header = () => {
    return <div className='header__todo'>
        <img src={logo} alt='Logo'/>
    </div>
}

export default Header;