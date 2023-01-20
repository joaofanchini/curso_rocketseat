import Header from "./components/header/Header";
import TabCreateTask from "./components/tabCreateTask/TabCreateTask";
import TaskSpace from "./components/taskSpace/TaskSpace";

function App() {
    return <>
        <Header/>
        <TabCreateTask applyNegativeMargin={true}/>
        <TaskSpace/>
    </>;
}

export default App
