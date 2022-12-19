import styles from './App.module.css';

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/post/Post";

const App = ():JSX.Element =>  {
    return <>
        <Header/>
        <div className={styles.wrapper}>
            <Sidebar/>
            <main>
                <Post/>
                <Post/>
            </main>
        </div>
    </>
};


export default App;