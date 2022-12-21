import styles from './Post.module.css';
import Comments from "../comments/Comments";
import Avatar from "../avatar/Avatar";

const Post = ():JSX.Element => {
    return <div className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={"https://avatars.githubusercontent.com/u/31604369?v=4"} hasBorder={true}/>
                <div className={styles.author__info}>
                    <strong>João Victor</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title ='2022-05-11' dateTime='2022-05-11'>Publicado há 1 h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galera</p>
            <p>Acabei de subir mais um projeto no meu portfolio</p>
            <p><a>teste.design/projeto</a></p>
            <p><a>#novoprojeto</a> <a>#portfolio</a> <a>#uhuu</a></p>
        </div>

        <form className={styles.commentForm} onSubmit={() => window.alert('Comentário enviado')}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Deixe um comentário'/>
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            <Comments/>
            <Comments/>
            <Comments/>
        </div>
    </div>
}

export default Post;