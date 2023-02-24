import React from 'react';
import './Dashboard.css';
import { useState, useEffect } from "react";
import group2 from "./group2.svg"
import dolarsign from "./dolarsign.svg"
import figma from "./figma.svg"

function Coin(props){
   return(
           <div className='coin'>
               <div className='frame4'>
                   <div className='frame2'>
                       <div className='t-coin'>{props.coin}</div>
                       <div className='frame1'>
                           <div className='t-rs'>{props.sign}</div>
                           <div className='t-valor'>{props.valor}</div>
                       </div>
                       <div className='t-dolar'>{props.content}</div>
                   </div>
                   <div className='bold'>
                       <div className='dolar-sign'>{props.imagem}</div>
                   </div>
               </div>
           </div>
   );
}

function Dashboard() {

   const figmaimg = <img src={figma} alt='figma'/>;
   const dolarimg = <img src={dolarsign} alt='figma'/>;


   function handleClick (){
      fetchUSD();
      fetch2();
      fetch3()
   }

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

   const [USD2, set2] = useState({}); 

   const fetch2 = () => { 
      fetch(`https://api.kraken.com/0/public/Ticker?pair=XBTeur`) 
      .then((response) => response.json()) 
      .then((jsonUSD) => set2(jsonUSD.result.XXBTZEUR.a)) 
      .catch((error) => console.log(error)); 
   }; 
    
     useEffect(() => { 
       fetch2(); 
     }, []);

       let valorString2 = USD2[0];
       let valorNumerico2 = parseFloat(valorString2);
       let valorArredondado2 = valorNumerico2.toFixed(2);
       let valorArredondadoString2 = valorArredondado2.toString();
       let numeroString2 = valorArredondadoString2;
       let numeroComVirgula2 = numeroString2.replace(".", ",");
   
   const [USD3, set3] = useState({}); 

   const fetch3 = () => { 
      fetch(`https://api.kraken.com/0/public/Ticker?pair=XBTusd`) 
      .then((response) => response.json()) 
      .then((jsonUSD) => set3(jsonUSD.result.XXBTZUSD.a)) 
      .catch((error) => console.log(error));        
      }; 
        
      useEffect(() => { 
         fetch3(); 
      }, []);
    
      let valorString3 = USD3[0];
      let valorNumerico3 = parseFloat(valorString3);
      let valorArredondado3 = valorNumerico3.toFixed(2);
      let valorArredondadoString3 = valorArredondado3.toString();
      let numeroString3 = valorArredondadoString3;
      let numeroComVirgula3 = numeroString3.replace(".", ",");

    return (
    <div className='section-dashboard'>
        <div className='head-section'>
            <div className='t-moedas'>Moedas</div>
            <div className='refresh-cw'>
                <button className='group2' onClick={handleClick} ><img src={group2} alt='b'></img></button>
            </div> 
        </div>
        <div className='cards-coin'>
            <Coin coin="BLR/USD" content="Dólar comercial" valor={numeroComVirgula} imagem={dolarimg} sign={"R$"}/>
            <Coin coin="BTC/EUR" content=""  valor={numeroComVirgula2} imagem={figmaimg} sign={"€"}/>
            <Coin coin="BTC/USD" content="" valor={numeroComVirgula3} imagem={figmaimg} sign={"$"} />               
        </div>
    </div>   
    );
}
export default Dashboard;