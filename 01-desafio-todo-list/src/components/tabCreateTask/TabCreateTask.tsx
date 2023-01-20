import './TabCreateTask.css'

import Input from "../../shared/input/Input";
import Button from "../../shared/button/Button";
import React, {ChangeEvent, useState} from "react";

interface TabCreateTaskProps {
    applyNegativeMargin?: boolean
    onCreateNewTask: (contentTask: string) => void
}

const TabCreateTask = (props: TabCreateTaskProps) => {

    const [newTask, setNewTask] = useState<string>('');

    const buttonCreteNewTaskDisabled = !newTask || newTask.trim().length <= 0;


    const handlerNewTask = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    }

    const handlerCreateNewTask = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.onCreateNewTask(newTask);
        setNewTask('');
    }

    return <div className={`tab__create__task ${!!props.applyNegativeMargin && 'margin-top-negative-3'}`}>
        <Input placeholder='Adicione uma nova tarefa'
               value={newTask}
               onChange={handlerNewTask}
        />
        <Button description='Criar'
                onClick={handlerCreateNewTask}
                disabled={buttonCreteNewTaskDisabled}
        />
    </div>
}

export default TabCreateTask;