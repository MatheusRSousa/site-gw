import React from "react";
import Cabecalho from '../componentes/cabecalho/Cabecalho.js'
import Slide from '../componentes/slide/Slide.js'
import Planos from '../componentes/planos/Planos.js';
import Rodape from '../componentes/rodape/Rodape.js';
import Conteudo from '../componentes/conteudo/Conteudo.js';
import imagemConteudo from "../imagens/img-conteudo.jpg";
import "./Home.css"

export default function Home(){
    return(
        <>
        <div id="cabecalho">
            <Cabecalho />
        </div>
        <div id="slide">
            <Slide  />
        </div>
        <div id="planos">
            <Planos/>
        </div>
        <div id="conteudo">
            <Conteudo/>
        </div>
        <img alt="" src = {imagemConteudo} id="imagemConteudo"/>
        <div id="rodape">
            <Rodape/>
        </div>
        </>
        );
    
}
