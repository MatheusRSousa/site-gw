import React from 'react';
import Cabecalho from '../componentes/cabecalho/Cabecalho.js';
import ConteudoEmpresa from '../componentes/conteudoEmpresa/ConteudoEmpresa.js';
import Rodape from '../componentes/rodape/Rodape.js';
import Conteudo from '../componentes/conteudo/Conteudo.js';
import './Empresa.css';


export default function Empresa(){
    return(
        <div>
            <Cabecalho/>
            <ConteudoEmpresa/>
            <hr></hr>
            <Conteudo />
            <hr></hr>
            <Rodape/>
        </div>
    );
}
