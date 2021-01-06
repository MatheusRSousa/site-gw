import React from 'react';
import Cabecalho from '../componentes/cabecalho/Cabecalho.js';
import Conteudo from '../componentes/conteudo/Conteudo.js';
import Planos from '../componentes/planos/Planos.js';
import Rodape from '../componentes/rodape/Rodape.js';

export default function PagePlanos(){
    return (
        <div>
            <Cabecalho/>
            <Planos/>
            <hr></hr>
            <Conteudo/>
            <hr></hr>
            <Rodape/>
        </div>
    );
}