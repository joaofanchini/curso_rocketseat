import './TaskSpace.css';

import Task from "../task/Task";
import TaskInfo from "../taskInfo/TaskInfo";

const TaskSpace = () => {
    return <div className='task__container'>
        <div className='task__space'>
            <div className='task__space__header'>
                <TaskInfo text="Tarefas Criadas" textCounter="5"/>
                <TaskInfo text="Tarefas Concluídas" textCounter="2 de 5"/>
            </div>
            <div className='task__space__tasks'>
                <Task id={'1'} description={'11312312312312312312312312312'}></Task>
                <Task id={'2'} description={'2'}></Task>
            </div>
        </div>
    </div>
}

export default TaskSpace;