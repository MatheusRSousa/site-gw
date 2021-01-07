import React, {useState} from 'react';
import './CentralAssinante.css';
import logo from '../imagens/logo-gw.jpg'

export default function CentralAssinante(){
    const [filial, setFilial] = useState(1);

    const list = [
        {id: 1, name: 'Selecione...'},
        {id: 2, name: 'São José da Mata'},
        {id: 3, name: 'Lagoa de Dentro'},
      ];

    function enviar(e){
        e.preventDefault()
        if(filial === "2"){   
            window.location.href = "http://45.6.36.94/central/login.php?acao=senha";
        }
        else if(filial === "3"){   
            window.location.href = "http://177.11.51.86/central/login.php?acao=senha";
        }
        else{
            alert("Selecione uma filial")
        }
    }

    return(
        <div className="corpoCentralAssinante">
            <form onSubmit={enviar}>
                <img alt="" src={logo}/>
                <label for="cars">Selecione sua filial:</label>
                <select name="select"  value={filial} onChange={e => setFilial(e.target.value)}>
                    {list.map((item, index) => (
                    <option value={item.id} >{item.name}</option>
                    ))} 
                </select>
                <button type="submit" >Enviar</button>
            </form>

        </div>
    );
}