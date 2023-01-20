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

    const handlerOnDeleteTask = (taskUpdated: TaskInterface) => {
        const filteredTasks = tasks.filter(task => task.id !== taskUpdated.id);
        setTasks([...filteredTasks]);
    }

    const handlerUpdateStatusTask = (taskUpdated: TaskInterface) => {
        const filteredTasks = tasks.filter(task => task.id !== taskUpdated.id);
        taskUpdated.isActive = !taskUpdated.isActive;
        setTasks([...filteredTasks, taskUpdated])
    }

    return <>
        <Header/>
        <TabCreateTask applyNegativeMargin={true}
                       onCreateNewTask={handlerNewTask}/>
        <TaskSpace tasks={tasks}
                   onDeleteTask={handlerOnDeleteTask}
                   onUpdateStatusTask={handlerUpdateStatusTask}/>
    </>;
}

export default App
