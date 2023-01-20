import './TabCreateTask.css'

import Input from "../../shared/input/Input";
import Button from "../../shared/button/Button";

interface TabCreateTaskProps {
    applyNegativeMargin?:boolean
}

const TabCreateTask = (props: TabCreateTaskProps) => {
    return <div className={`tab__create__task ${!!props.applyNegativeMargin && 'margin-top-negative-3'}`}
    >
        <Input placeholder='Adicione uma nova tarefa'/>
        <Button description='Criar'/>
    </div>
}

export default TabCreateTask;