import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import Avatar from "../avatar/Avatar";
const Sidebar = (): JSX.Element => {
    return <aside className={styles.sidebar}>
        <img className={styles.background} src="https://images.unsplash.com/photo-1595787383690-18b606faa4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"/>
        <div className={styles.profile}>
            <Avatar src={"https://avatars.githubusercontent.com/u/31604369?v=4"} hasBorder={true}/>
            <div className={styles.profile__details}>
                <strong>João Victor</strong>
                <p>Web Developer</p>
            </div>
            <div className={styles.footer}>
                <a href="#">
                    <PencilLine width={20}/>
                    <span>Editar seu perfil</span>
                </a>
            </div>
        </div>
    </aside>
}

export default Sidebar;