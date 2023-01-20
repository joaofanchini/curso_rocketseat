import Header from "./components/header/Header";
import TabCreateTask from "./components/tabCreateTask/TabCreateTask";
import TaskSpace from "./components/taskSpace/TaskSpace";
import {useState} from "react";

export interface TaskInterface {
    id: number,
    content: string,
    isActive: boolean
}

function App() {

    const [tasks, setTasks] = useState<TaskInterface[]>([]);

    const handlerNewTask = (contentTask: string) => {
        const newTask: TaskInterface = {
            id: tasks.length + 1,
            content: contentTask,
            isActive: true
        }

        setTasks([...tasks, newTask])
    }

    return <>
        <Header/>
        <TabCreateTask onCreateNewTask={handlerNewTask} applyNegativeMargin={true}/>
        <TaskSpace tasks={tasks}/>
    </>;
}

export default App
