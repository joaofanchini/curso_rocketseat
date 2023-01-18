import styles from "./Header.module.css";
import igniteLogo from "../../assets/IgniteSimbol-logo.svg";

const Header = (): JSX.Element => {
    return <header className={styles.header}>
        <img alt="Imagem logo" src={igniteLogo}/>
        <strong>Ignite Feed</strong>
    </header>;
}

export default Header;