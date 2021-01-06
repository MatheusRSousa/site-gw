import React from 'react';
import './rodape.css'
import logoWhite from '../../imagens/gw-logo-white.png';

export default function Rodape() {
  return (
    
      <div className="rodape">
          <div className="logoRodape">
            <img alt="" src={logoWhite} />
          </div>
          <div className="informacoes">
              <p>
                Sejam bem vindos ao site da GW Telecom, um site desenvolvido pensando em você. Site moderno onde você, pode ver nossos planos,
                acessar a central do assinante onde você poderá retirar a segunda via do boleto entre outros serviços, e ainda pode entrar em contato com 
                nossa equipe e retirar todas as suas duvidas.
              </p>
              <p></p>
              <p>Equipe GW Telecom</p>
          </div>
      </div>
  );
}
