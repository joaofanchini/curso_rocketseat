import {HistoryContainer, HistoryList, Status} from './HistoryStyles';

const History = () => {
    return <HistoryContainer>
        <h1>Meu Histórico</h1>
        {/* Foi criado esse componente de div em volta da tabela, pois quando passamos para o Mobile,
        não existe um modelo legal de fazer a representação da tabela. assim o que podemos fazer é o que
        utilizador possa dar ‘scroll’ horizontal na tabela, sem redimencionar a tabela para o tamanho da tela
        mobile. Assim temos que ela irá ter um tamanho fixo - E nisso a div facilita o desenvolvimento e
        organização do projeto*/}
        <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nome da tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='yellow'>Em andamento</Status></td>
                    </tr>
                    <tr>
                        <td>Nome da tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='red'>Interrompido</Status></td>

                    </tr>
                    <tr>
                        <td>Nome da tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='green'>Concluído</Status></td>
                    </tr>
                </tbody>
            </table>
        </HistoryList>
    </HistoryContainer>;
};

export default History;