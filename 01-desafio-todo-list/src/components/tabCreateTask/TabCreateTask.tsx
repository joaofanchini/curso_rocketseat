import './TabCreateTask.css'

import Input from "../../shared/input/Input";
import Button from "../../shared/button/Button";

const TabCreateTask = () => {
    return <div className='tab__create__task'>
        <Input placeholder='Adicione uma nova tarefa'/>
        <Button description='Criar'/>
    </div>
}

export default TabCreateTask;