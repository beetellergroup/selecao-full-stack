import React from 'react';
import './styles/List.css';
import dolarsign from './Icons/dolarsign.svg'
import { useState, useEffect } from "react";
import down from './Icons/down.svg';

function Frame(props){
    const timestamp = props.timestamp*1000;
    const data = new Date(timestamp);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString();
    const dataHoraFormatada = `${dia}/${mes}/${ano}`;
    const pctChange=props.pctChange

    let numeroString = pctChange;
    let numero = parseFloat(numeroString);
    if (numero > 0) {
        numeroString = "+" + numeroString;
    }

return(
    <div class="frame14">
    <div class="frame9">
        <div class="bold2">
            <div class="dollar-sign">
                <div className='dolar-sign2'>
                    <img src={dolarsign} alt='dolarsign' ></img></div>
                </div>
           </div>
        <div class="frame8">
            <div class="t-frame8">{props.moeda}</div>
            <div class="t_data">{dataHoraFormatada}</div>
        </div>
    </div>
    <div class="frame11">
        <div class="t_min">{props.low}</div>
        <div class="t_max">{props.high}</div>
    </div>
    <div className={ numeroString>=0 ? "frame10" : "frame10b"}>
        <div class="t_frame10" >{numeroString+"%"}</div>
    </div>
</div>
);
}

function List() {

    function Inter(props) {
        const [data, setData] = useState([]);

        function fetchData() {
    
          fetch(url[selectedOption])
            .then(response => response.json())
            .then(data => setData(data));
        }
    
        useEffect(() => {
            fetchData();
          }, []);
      
        return (
                <ul className={props.className}>
                {data.map(item => (
                    <ui><Frame  high={item.high} low={item.low} pctChange={item.pctChange} timestamp={item.timestamp} moeda={props.moeda}/></ui> 
                ))}
                </ul>
        );
    }

    const [selectedOption, setSelectedOption] = useState('1');
    
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    }

    const url = {
        "1":"http://localhost:8000/api/USD-BRL/15/",
        "2":"http://localhost:8000/api/EUR-BRL/15/",
        "3":"http://localhost:8000/api/BTC-BRL/15/"
     }

     const moeda = {
        "1":"Dólar americano",
        "2":"Euro",
        "3":"Bitcoin"
     }
     
    return (
        <div class="section_list">
        <div class="head_section2">
            <div class="t_cotacoes">Cotações</div>
                <select class="btn_coin"  value={selectedOption} onChange={handleSelectChange}>
                    <option value='1' >Dólar americano</option>
                    <option value='2' >Euro</option>
                    <option value='3' >Bitcoin</option>
                </select>
        </div>
        <div class="table_list">
            <div class="head_list">
                <div class="t_moeda">Moeda</div>
                <div class="frame28">
                    <div class="minima">
                        <div class="t_minima">Mínima</div>
                        <div class="chevron_down">
                            <div class="vector"><img src={down} alt='down' ></img></div>
                        </div>
                    </div>
                    <div class="maxima">
                        <div class="t_maxima">Máxima</div>
                        <div class="chevron_down">
                            <div class="vector"><img src={down} alt='down' ></img></div>
                        </div>
                    </div>
                </div>
                <div class="variacao">
                    <div class="t_variacao">Variação</div>
                    <div class="chevron_down">
                        <div class="vector"><img src={down} alt='down' ></img></div>
                    </div>
                </div>
            </div>
            <div class="section_list_interno">
                    <Inter className="section_list_interno" moeda={moeda[selectedOption]}/>            
            </div>
        </div>
    </div>
    );
}
export default List;