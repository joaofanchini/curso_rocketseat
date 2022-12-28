import styles from './App.module.css';

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Post, {IPost} from "./components/post/Post";


const posts: IPost[] = [
    {
        id: 1,
        publishedAt: new Date('2022-05-10'),
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/31604369?v=4',
            name:'Joao Teste',
            role:'Web Designer'
        },
        contents:[
            {
                type:'paragraph',
                content:'Fala galera!!'
            },
            {
                type:'paragraph',
                content:'Acabei de subir mais um projeto no meu portfólio.'
            },
            {
                type:'link',
                content:'jane.design/doctorcare'
            }
        ]
    },
    {
        id: 2,
        publishedAt: new Date('2022-05-10'),
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/31604369?v=4',
            name:'Joao Teste',
            role:'Web Designer'
        },
        contents:[
            {
                type:'paragraph',
                content:'Fala galera!!'
            },
            {
                type:'paragraph',
                content:'Acabei de subir mais um projeto no meu portfólio.'
            },
            {
                type:'link',
                content:'jane.design/doctorcare'
            }
        ]
    }
]

const App = ():JSX.Element =>  {
    return <>
        <Header/>
        <div className={styles.wrapper}>
            <Sidebar/>
            <main>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </main>
        </div>
    </>
};


export default App;