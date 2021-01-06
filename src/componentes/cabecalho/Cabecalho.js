import React from "react";
import './Cabecalho.css';
import logo from '../../imagens/logo-gw.jpeg'
import {Link} from 'react-router-dom';

export default function Cabecalho() {
    var ativo = true;
    function clicouMenu(e){
        e.preventDefault();
        var link = document.getElementById("links");
        if(ativo){
            link.style.right = "0";
            ativo = false;
        }else{
            link.style.right = "-100%"
            ativo = true;
        }
        
        
    }

  return (
          <div className = "cabecalho">
                <div className = "cab-1">
                    <div>
                    <a href="https://www.instagram.com/gw_telecom/" rel="noopener">@gw_telecom</a>
                    </div>
                    <div className="numeros">
                    <p>Lagoa de Dentro (83) 98662-5944</p>
                    <p>São José da Mata (83) 3314-1279</p>
                    </div>
                </div>
                
                <div className = "cab-2">
                    <div className= "logo" >
                        <img src={logo} alt= "Logo GW"  />
                       
                    </div>
                    <div className="menu-mobile" id="menu-mobile" onClick={clicouMenu}>
                    </div>
                    
                    <ul className="links" id="links" >
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/empresa">A EMPRESA</Link></li>
                        <li><Link to="/planos">PLANOS</Link></li>
                        <li><Link to="/central" >CENTRAL DO ASSINANTE</Link></li>
                        <li><a href="https://www.speedtest.net/">TESTE DE VELOCIDADE</a></li>
                        <li><Link to="/contatos">CONTATOS</Link> </li>
                       
                    </ul>
                </div>
            </div>
  );
}
