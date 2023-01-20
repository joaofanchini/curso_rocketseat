import './Task.css'
import {Trash} from "phosphor-react";
import {TaskInterface} from "../../App";

export interface TaskProps {
    task: TaskInterface,
    onDeleteTask: (task: TaskInterface) => void,
    onUpdateStatusTask: (task: TaskInterface) => void
}

const Task = (props: TaskProps) => {

    const isCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onUpdateStatusTask(props.task);
    }

    const handlerOnDeleteTask = (event: any) => {
        props.onDeleteTask(props.task);
    }

    return <div className='task'>
        <div className='task__container_fieldset'>
            <fieldset className='task__fieldset'>
                <input type='checkbox' id={props.task.id.toString()} name={props.task.id.toString()}
                       checked={!props.task.isActive}
                       onChange={isCheckedHandler}
                />
                <label className='cb-label' htmlFor={props.task.id.toString()}></label>
            </fieldset>
            <span
                className={`task__description ${!props.task.isActive ? 'task__description--scratched' : ''}`}>{props.task.content}</span>
        </div>
        <Trash className='task__icon' size={24} onClick={handlerOnDeleteTask}></Trash>
    </div>
}

export default Task;