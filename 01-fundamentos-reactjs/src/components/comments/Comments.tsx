import styles from './Comments.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import Avatar from "../avatar/Avatar";
import {useState} from "react";

type Comment = {
    id:number,
    comment:string,
    onDeleteComment: (id:number) => void
}

const Comments = ({id, comment, onDeleteComment}:Comment) => {
    const [likeCount, setLikeCount] = useState<number>(0);

    const handleOnClickLike = () => {
        // Closures React
        // Neste formato garante que o valor utilizado será o mais recente (fila de atualização de contexto dos componentes)
        // Muito utilizado para quando o componente depende de informações que ele mesmo gera
        setLikeCount((latestValue) => {
            return latestValue + 1;
        })
    }

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
                        <Trash size={20} onClick={() => onDeleteComment(id)}/>
                    </button>
                </header>
                <p>{comment}</p>
            </div>
            <footer>
                <button
                    onClick={handleOnClickLike}>
                    <ThumbsUp
                        size={24}/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>;
}

export default Comments