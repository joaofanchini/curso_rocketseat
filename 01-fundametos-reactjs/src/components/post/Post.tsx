import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Comments from "../comments/Comments";
import Avatar from "../avatar/Avatar";
import React, {useState} from "react";

type Author = {
    avatarUrl:string,
    name: string,
    role: string
}

type Content = {
    type:string,
    content: string
}

type PropsPost = {
    post: Post
}

export interface Post {
    id: number,
    publishedAt: Date
    author:Author,
    contents: Content[]
}

const Post = ({post}:PropsPost):JSX.Element => {
    const publishedDateTimeFormat = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateTimeFormatFromNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState<string[]>([]);

    const [newComment, setNewComment] = useState<string>('');

    function handleSubmitComment(event: any) {
        event.preventDefault();
        setComments([ ...comments, newComment]);
        setNewComment('')
    }

    return <div className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={post.author.avatarUrl} hasBorder={true}/>
                <div className={styles.author__info}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>
            </div>
            <time title ={publishedDateTimeFormat} dateTime={post.publishedAt.toISOString()}>{publishedDateTimeFormatFromNow}</time>
        </header>

        <div className={styles.content}>
            {post.contents.map(content => {
                if(content.type === 'paragraph'){
                    return <p>{content.content}</p>
                }
                else if (content.type === 'link') {
                    return <p><a href='#'>{content.content}</a></p>
                }
            })}
        </div>

        <form className={styles.commentForm} onSubmit={event => handleSubmitComment(event)}>
            <strong>Deixe seu feedback</strong>
            <textarea name='taComment'
                      value={newComment}
                      onChange={(event) => setNewComment(event.target.value)}
                      placeholder='Deixe um comentário'/>
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            {comments.map((comment, id) => <Comments key={id} comment={comment}/>)}
        </div>
    </div>
}

export default Post;