import '../globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Router/>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
