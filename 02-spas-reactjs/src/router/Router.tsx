import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import DefaultLayout from './layout/DefaultLayout';


const Router = () => {
    //Necessário o componente de contexto "Routes" para declaração das Rotas
    return <Routes>
        {/*O componente DefaultLayout nada mais é do que um modo de criar um fragment do código.
        Note que "/" possui o sentido semantico de ser o não possui rota. Todas as rotas são alinhadas,
        logo que dizer que para chamar o componente "History", precisa passar primeiro o path do componente
        "DefaultLayout" e então passar o path do elemento "History"*/}
        <Route path="/" element={<DefaultLayout/>}>
            {/*Componete que realiza o roteamento*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
        </Route>
    </Routes>;
};

export default Router;