import './TaskSpace.css';

import Task from "../task/Task";

const TaskSpace = () => {
    return <div className='task__space'>
        <div className='task__space__header'>
            <div>
                <span>Tarefas criadas</span>
                <span>5</span>
            </div>
            <div>
                <span>Concluídas</span>
                <span>{`${2} de ${5}`}</span>
            </div>
        </div>
        <div className='task__space__tasks'>
            <Task id={'1'} description={'11312312312312312312312312312'}></Task>
            <Task id={'2'} description={'2'}></Task>
        </div>
    </div>
}

export default TaskSpace;