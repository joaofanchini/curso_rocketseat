import './Task.css'
import {Trash} from "phosphor-react";
import {useState} from "react";

export interface TaskProps {
    id: number,
    content: string
}

const Task = (props: TaskProps) => {

    const [isChecked, setIsChecked] = useState(false);

    const isCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }

    return <div className='task'>
        <div className='task__container_fieldset'>
            <fieldset className='task__fieldset'>
                <input type='checkbox' id={props.id.toString()} name={props.id.toString()}
                       checked={isChecked}
                       onChange={isCheckedHandler}
                />
                <label className='cb-label' htmlFor={props.id.toString()}></label>
            </fieldset>
            <span className={`task__description ${isChecked ? 'task__description--scratched' : ''}`}>{props.content}</span>
        </div>
        <Trash className='task__icon' size={24}></Trash>
    </div>
}

export default Task;