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
    return <HomeContainer>
        <form action=''>
            <TaskContainer>
                <label htmlFor='input_task'>Vou trabalhar em</label>
                <TaskInput
                    type='text'
                    id='input_task'
                    placeholder='Dê um nome para o seu projeto'
                    list='task-suggestions'
                    required
                />
                <datalist id='task-suggestions'>
                    <option value='Projeto'/>
                </datalist>
                <label htmlFor='minutes_amount'>durante</label>
                <MinutesAmountInput
                    type='number'
                    id='minutes_amount'
                    placeholder='00'
                    step={5}
                    min={5}
                    max={60}
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
            <StartCountdownButton type='submit'>
                <Play size={24}/> Começar
            </StartCountdownButton>
        </form>
    </HomeContainer>;
};

export default Home;