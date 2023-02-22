import React from 'react';
import './List.css';
import dolarsign from './dolarsign.svg'
import { useState, useEffect } from "react";
import down from './down.svg';

function Frame(props){

    const timestamp = props.timestamp*1000;
    const data = new Date(timestamp);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString();
    const dataHoraFormatada = `${dia}/${mes}/${ano}`;

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
    <div class="frame10">
        <div class="t_frame10">{props.pctChange}</div>
    </div>
</div>
);
}

function Inter(props) {
    const [data, setData] = useState([]);
  
    function fetchData() {
      fetch('https://economia.awesomeapi.com.br/json/daily/USD-BRL/15')
        .then(response => response.json())
        .then(data => setData(data));
    }

    useEffect(() => {
        fetchData();
      }, []);
  
    return (
            <ul className={props.className}>
            {data.map(item => (
                <ui><Frame  high={item.high} low={item.low} pctChange={item.pctChange} timestamp={item.timestamp} moeda={"Dólar Americano"}/></ui> 
            ))}
            
            </ul>
    );
  }

function List() {
    return (
        <div class="section_list">
        <div class="head_section2">
            <div class="t_cotacoes">Cotações</div>
            <div class="btn_coin">
                <div class="texto_coin">Dólar americano</div>
                <div class="chevron_down">
                    <div class="vector_down"><img src={down} alt='down' ></img></div>
                </div>
            </div>
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
                <Inter className="section_list_interno"/>            
            </div>
        </div>
    </div>
    );
}
export default List;