import styles from './Comments.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import Avatar from "../avatar/Avatar";

const Comments = () => {
    return <div className={styles.comment}>
        <Avatar src={"https://avatars.githubusercontent.com/u/31604369?v=4"}/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Alexandre Devon</strong>
                        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
                    </div>
                    <button title="Deletar comentário">
                        <Trash size={20}/>
                    </button>
                </header>
                <p>Melhor comentário</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp size={24}/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>;
}

export default Comments