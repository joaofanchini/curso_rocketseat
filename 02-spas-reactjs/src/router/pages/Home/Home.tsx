import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import * as zod from 'zod'; // A biblioteca Zod não possui um export como default.

import {Play} from 'phosphor-react';
import {
    HomeContainer,
    TaskContainer,
    CountdownContainer,
    Separator,
    StartCountdownButton,
    TaskInput,
    MinutesAmountInput
} from './HomeStyles';

const Home = () => {

    const formInputs = zod.object({
        task: zod.string()
            .min(1, 'Nome de tarefa obrigatório.')
            .max(25,'Nome de tarefa deve ter no máximo 25 caracteres.')
        ,
        minutesAmount: zod.number()
            .min(5, 'a tarefa deve levar pelo menos 5 minutos.')
            .max(60, 'A tarefa deve ter um máximo de 60 minutos.')
    });

    type TypeFormInput = zod.infer<typeof formInputs>

    const {register, reset, watch, handleSubmit, formState} = useForm<TypeFormInput>({
        resolver: zodResolver(formInputs),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    });

    const watcherInputTask = watch('task');

    const isSubmitDisabled = !watcherInputTask;

    const createNewTimerEvent = (data: TypeFormInput) => {
        console.log('submit', data);
        reset();
    };

    return <HomeContainer>
        <form onSubmit={handleSubmit(createNewTimerEvent)} action=''>
            <TaskContainer>
                <label htmlFor='input_task'>Vou trabalhar em</label>
                <TaskInput
                    id='input_task'
                    type='text'
                    placeholder='Dê um nome para o seu projeto'
                    list='task-suggestions'
                    {...register('task')}
                />
                <datalist id='task-suggestions'>
                    <option value='Projeto'/>
                </datalist>
                <label htmlFor='minutes_amount'>durante</label>
                <MinutesAmountInput
                    id='minutes_amount'
                    type='number'
                    placeholder='00'
                    {...register('minutesAmount', {valueAsNumber: true})}
                />
                <span>minutos.</span>
            </TaskContainer>
            <CountdownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
            </CountdownContainer>
            <StartCountdownButton disabled={isSubmitDisabled} type='submit'>
                <Play size={24}/> Começar
            </StartCountdownButton>
        </form>
    </HomeContainer>;
};

export default Home;