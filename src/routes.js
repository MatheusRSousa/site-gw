import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home.js';
import Empresa from './pages/Empresa.js'
import Planos from './pages/Planos.js';
import Contatos from './pages/Contatos.js';
import CentralAssinante from './pages/CentralAssinante.js';



export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/empresa" component={Empresa}/>
            <Route path="/planos" component={Planos}/>
            <Route path="/contatos" component={Contatos}/>
            <Route path="/central" component={CentralAssinante}/>
        </BrowserRouter>
    );
}