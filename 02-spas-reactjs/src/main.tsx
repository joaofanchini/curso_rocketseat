import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./theme/default";
import {GlobalStyle} from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* Componente de contexto do styled-components que permite o uso de variáveis para
        montar o tema default da aplicação*/}
        <ThemeProvider theme={defaultTheme}>
            {/* Componente criado utilizando o createGlobalStyle do styled-components. Ele é um
            componente de contexto também e precisa ser aplicando no componente ThemeProvider*/}
            <GlobalStyle/>
            {/*Componente de contexto que permite o roteamento pelo react-router-dom*/}
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
    ,
)
