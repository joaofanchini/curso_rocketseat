import styled from 'styled-components';

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['gray-100']};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    // Defininr o tipo de borda mínima para uma tabela
    // Faz com que cada borda da tabela seja construida com as
    // bordas das células TR e TD
    border-collapse: collapse;

    // O comportamento padrão faz com que já haja uma barra horizontal
    // quando o largura da tabela exceder ao tamanho da tela
    min-width: 600px;
    width: 100%;

    th {
      background-color: ${props => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${props => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${props => props.theme['gray-700']};
      border-top: 4px solid ${props => props.theme['gray-800']};
      padding: 1rem;
      font-size: .875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

// 'as const' é uma gambiarra, onde fazemos isso para forçar com que o objeto constrído tenha
// suas propriedades definidas como 'readonly'.
const STATUS_COLOR = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500'
} as const;

interface StatusProps {
    statusColor: keyof typeof STATUS_COLOR;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: .5rem;
  
  &::before {
    content: '';
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background-color: ${props => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`;

