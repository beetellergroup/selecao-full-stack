import React from 'react';
import './Dashboard.css';
import { useState, useEffect } from "react";
import group2 from "./group2.svg"
import dolarsign from "./dolarsign.svg"
import figma from "./figma.svg"

function Dashboard() {

    function Coin(props){

        const [USD, setUSD] = useState({}); 
    
        const fetchUSD = () => { 
            fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`) 
              .then((response) => response.json()) 
              .then((jsonUSD) => setUSD(jsonUSD.USDBRL)) 
              .catch((error) => console.log(error)); 
        }; 
         
          useEffect(() => { 
            fetchUSD(); 
          }, []);
    
            let valorString = USD.bid;
            let valorNumerico = parseFloat(valorString);
            let valorArredondado = valorNumerico.toFixed(2);
            let valorArredondadoString = valorArredondado.toString();
            let numeroString = valorArredondadoString;
            let numeroComVirgula = numeroString.replace(".", ",");
    
    
        return(
                <div className='coin'>
                    <div className='frame4'>
                        <div className='frame2'>
                            <div className='t-coin'>{props.coin}</div>
                            <div className='frame1'>
                                <div className='t-rs'>R$</div>
                                <div className='t-valor'>{numeroComVirgula}</div>
                            </div>
                            <div className='t-dolar'>{props.content}</div>
                        </div>
                        <button className='bold' onClick={fetchUSD}>
                            <div className='dolar-sign'><img src={dolarsign} alt='dolarsign'></img></div>
                        </button>
                    </div>
                </div>
        );
    }
    
    function Coin2(props){
    
        const [USD, setUSD] = useState({}); 
    
        const fetchUSD = () => { 
            fetch(`https://api.kraken.com/0/public/Ticker?pair=XBTeur`) 
              .then((response) => response.json()) 
              .then((jsonUSD) => setUSD(jsonUSD.result.XXBTZEUR.a)) 
              .catch((error) => console.log(error)); 
        }; 
         
          useEffect(() => { 
            fetchUSD(); 
          }, []);
    
            let valorString = USD[0];
            let valorNumerico = parseFloat(valorString);
            let valorArredondado = valorNumerico.toFixed(2);
            let valorArredondadoString = valorArredondado.toString();
          
        return(
                <div className='coin'>
                    <div className='frame4'>
                        <div className='frame2'>
                            <div className='t-coin'>{props.coin}</div>
                            <div className='frame1'>
                                <div className='t-rs'>$</div>
                                <div className='t-valor'>{valorArredondadoString}</div>
                            </div>
                            <div className='t-dolar'>{props.content}</div>
                        </div>
                        <button className='bold' onClick={fetchUSD}>
                            <div className='dolar-sign'><img src={figma} alt='figma'></img></div>
                        </button>
                    </div>
                </div>
        );
    }
    
    function Coin3(props){

        
    
        const [USD, setUSD] = useState({}); 
    
        const fetchUSD = () => { 
            fetch(`https://api.kraken.com/0/public/Ticker?pair=XBTusd`) 
              .then((response) => response.json()) 
              .then((jsonUSD) => setUSD(jsonUSD.result.XXBTZUSD.a)) 
              .catch((error) => console.log(error)); 
        }; 
         
          useEffect(() => { 
            fetchUSD(); 
          }, []);
    
          let valorString = USD[0];
          let valorNumerico = parseFloat(valorString);
          let valorArredondado = valorNumerico.toFixed(2);
          let valorArredondadoString = valorArredondado.toString();
    
        return(
                <div className='coin'>
                    <div className='frame4'>
                        <div className='frame2'>
                            <div className='t-coin'>{props.coin}</div>
                            <div className='frame1'>
                                <div className='t-rs'>$</div>
                                <div className='t-valor'>{valorArredondadoString}</div>
                            </div>
                            <div className='t-dolar'>{props.content}</div>
                        </div>
                        <button className='bold' onClick={fetchUSD}>
                            <div className='dolar-sign'><img src={figma} alt='figma'></img></div>
                        </button>
                    </div>
                </div>
        );
    }
    return (
    <div className='section-dashboard'>
        <div className='head-section'>
            <div className='t-moedas'>Moedas</div>
            <div className='refresh-cw'>
                <button className='group2' ><img src={group2} alt='b'></img></button>
            </div> 
        </div>
        <div className='cards-coin'>
            <Coin coin="BLR/USD" content="Dólar comercial" />
            <Coin2 coin="BTC/EUR" content=""  />
            <Coin3 coin="BTC/USD" content="" />               
        </div>
    </div>   
    );
}
export default Dashboard;