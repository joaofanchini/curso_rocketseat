import './TaskInfo.css';

interface TaskInfoProps {
    text:string,
    textCounter:string
}

const TaskInfo = (props:TaskInfoProps) => {
    return <div className='task__info'>
        <span className='task__info__text'>{props.text}</span>
        <span className='task__info__counter'>{props.textCounter}</span>
    </div>
}

export default TaskInfo;