import React from 'react';
import Cabecalho from '../componentes/cabecalho/Cabecalho.js';
import Conteudo from '../componentes/conteudo/Conteudo.js';
import FaleConosco from '../componentes/faleConosco/FaleConosco.js';
import Rodape from '../componentes/rodape/Rodape.js';



export default function Contatos(){
    return(
        <div>
            <Cabecalho/>
            <FaleConosco/>
            <hr></hr>
            <Conteudo/>
            <hr></hr>
            <Rodape/>
        </div>
    );
}