import {Outlet} from "react-router-dom";
import {LayoutContainer} from "./DefaultLayoutStyle";
import Header from "../../components/header/Header";

const DefaultLayout = () => {
    return <LayoutContainer>
        <Header/>
        {/*Componente "Outlet" é o componente que permite com que sejam passados componentes filhos
        para serem renderizados num elemento pai. Modo de encapsular um componente*/}
        <Outlet/>
    </LayoutContainer>
}

export default DefaultLayout;