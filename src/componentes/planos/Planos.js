import React from 'react';
import { useHistory } from 'react-router-dom'
import "./Planos.css"

export default function Planos() {
    const lista = [{descricao : "10 MB", valor: "59", tipoConexao: "Via rádio", download: "10 Mbps", upload:"10 Mbps"}, {descricao : "15 MB", valor: "79", tipoConexao: "Via rádio", download: "15 Mbps", upload:"10 Mbps"}
    ,{descricao : "20 MB", valor: "99", tipoConexao: "Via rádio", download: "20 Mbps", upload:"10 Mbps"},{descricao : "50 MB", valor: "59", tipoConexao: "Fibra Óptica", download: "50 Mbps", upload:"10 Mbps"}]
    

    const history = useHistory();

    function handleClick(){
        history.push("/contatos");
    }
   
    
    return (
        < div  class = "jss953" > 
            { lista.map((item,index) => 
            <div class="jss954"  key={index} >
                    <div class="jss955"   >
                        <div>
                        
                        <h6 class="MuiTypography-root jss956 MuiTypography-h6">GW Telecom</h6>
                        <p class="MuiTypography-root jss957 MuiTypography-body1">{item.descricao}</p>
                        
                        <hr class="MuiDivider-root jss958" ></hr>
                        
                        </div>
                            <ul class="jss964">
                            <li class="jss965">
                                <p class="MuiTypography-root jss966 MuiTypography-body2">
                                <p data-sourcepos="1:1-1:13">{item.tipoConexao}
                                </p>
                                </p>
                            </li>
                            <li class="jss965">
                                <p class="MuiTypography-root jss966 MuiTypography-body2">Download {item.download}</p>
                            </li>
                            <li class="jss965">
                                <p class="MuiTypography-root jss966 MuiTypography-body2">Upload {item.upload}</p>
                            </li>
                            <li class="jss965">
                                <p class="MuiTypography-root jss966 MuiTypography-body2">Wi-Fi de Alta Perfomance</p>
                            </li>
                            </ul>
                        <div class="jss959">
                            <div class="jss1020">
                                <div class="jss1021">
                                    <div>
                                        <h6 class="MuiTypography-root jss1024 MuiTypography-h6">R$</h6>
                                    </div>
                                </div>
                                <div class="jss1022">
                                    <h1 class=" jss1026 ">{item.valor}</h1>
                                </div>
                                <div class="jss1023">
                                    <div>
                                        <h6 class="MuiTypography-root jss1025 MuiTypography-h6">,99</h6>
                                    </div>
                                    <div>
                                        <h6 class="MuiTypography-root jss1024 MuiTypography-h6">/MÊS</h6>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleClick} class="MuiButtonBase-root MuiButton-root MuiButton-contained jss975" tabindex="0" type="button"><h6 class="MuiTypography-root jss976 MuiTypography-h6">Assine já</h6></button> </div>
                    </div>
                    </div> 
                    )}
                  
                </ div>
              );
     
    
 
  
}