import './TaskSpace.css';

import Task from "../task/Task";
import TaskInfo from "../taskInfo/TaskInfo";
import {TaskInterface} from "../../App";

interface TaskSpaceProps {
    tasks: TaskInterface[]
}

const TaskSpace = (props: TaskSpaceProps) => {

    const counterTasksCreated = props.tasks
        .length;

    const counterTasksDone = props.tasks
        .filter(task => !task.isActive)
        .length

    return <div className='task__container'>
        <div className='task__space'>
            <div className='task__space__header'>
                <TaskInfo text="Tarefas Criadas" textCounter={`${counterTasksCreated}`}/>
                <TaskInfo text="Tarefas Concluídas" textCounter={`${counterTasksDone} de ${counterTasksCreated}`}/>
            </div>
            <div className='task__space__tasks'>
                {props.tasks.map(task => {
                    return <Task key={task.id} id={task.id} content={task.content}/>
                })}
            </div>
        </div>
    </div>
}

export default TaskSpace;