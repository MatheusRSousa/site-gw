import React, {useState} from 'react';
import "./FaleConosco.css";

export default function FaleConosco(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [plano, setPlano] = useState('');
    
        function sendMail() {
            var link =
              "mailto:comercial.gwtelecom@gmail.com" +
              "?subject=" +
              escape("Assinatura") +
              "&body=" +
              escape(`Me chamo ${name}, portador do email: ${email}, e telefone: ${telefone} e tenho interesse de assinar o plano de ${plano}`);
            window.location.href = link;
          }
    
    return(
        <div className="boxPrincipal">
            <div className="corpoFaleConosco">
            <h1>Fale Conosco</h1>
            <hr></hr>
            <br></br>
            <h4>Entre em contato com nossa equipe</h4>
            <br></br>
            <div className = "box">
                <h4>WhatsApp Filial de São José da mata: (83) 3314-1279</h4>                
            </div>
            <div className = "box">
            <h4>WhatsApp Filial de Lagoa de Dentro: (83) 98662-5944</h4>
            </div>
            <div className = "box">
                <h4>Email: comercial.gwtelecom@gmail.com</h4>
            </div>
            </div>

            <div className="corpoAssine" >
                <h1>Preencha e assine</h1>
                <hr></hr>
                <br></br>
                <h4>Preencha o formulário abaixo e tire suas dúvidas.</h4>
                <br></br>
                <form onSubmit={sendMail} method="get" action="mailto:matheus.rsousa16@gmail.com" target="_blank">
                <div>
                    <label for="nome"></label>
                    <input type="text"
                     placeholder="Nome:" required 
                      value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label for="email"></label>
                    <input type="email" placeholder="Email:" required
                     value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label for="Telefone"></label>
                    <input type="telefone"  placeholder="Telefone:" required 
                     value={telefone} onChange={e => setTelefone(e.target.value)}/>
                </div>
                <div>
                    <label for="msg"></label>
                    <textarea  placeholder="Qual o plano que mais lhe interessou?:" required 
                     value={plano} onChange={e => setPlano(e.target.value)}></textarea>
                </div>
                <button type="submit" >Enviar Mensagem</button>
                </form>
            </div>
        </div>
    );
}
