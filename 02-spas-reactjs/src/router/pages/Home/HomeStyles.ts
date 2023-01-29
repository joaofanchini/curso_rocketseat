import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  width: 100%;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 .5rem;
  color: ${props => props.theme['gray-100']};
  transition: .2s border-color;

  &:focus {
    // Os elementos focus sempre possuem a propriedade box-shadow.
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }

  &::placeholder {
    border-color: ${props => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  //Flex 1 faz com que sejam aplicadas três propriedades do display Flex
  //Flex-grow, flex-shrink e flex-basis
  flex: 1;
  
  // Este estilo serve para retirar a arrow do datalist - Funcional no Chrome
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

`;

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${props => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCountdownButton = styled.button`
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme['gray-100']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border: 0;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-700']};
  }

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
`;