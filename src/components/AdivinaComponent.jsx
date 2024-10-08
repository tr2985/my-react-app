import React from 'react';
import { useState } from 'react';

function AdivinaComponent (){

const [numero, setNumero] = useState(1);
const [sorteo, setsorteo] = useState(0);
const [result, setResult] = useState(false);

const sotear = ()=> {

const winner = Math.floor(Math.random()*10)+1;
setsorteo(winner); // asigno valor por funcion
setResult(true)

}

return (

    // "e" en linea 29 es de "evento" //

    <div style={{margin:30}}>

        {!result?
        
            <div>
                <h4>Adivina el numero del 1 al 10</h4>
                
                < input type='number' value={numero} onChange={(e) => setNumero(e.target.value)}></input>
                <br/>

                <button onClick={() =>sotear()}>Sortear</button>

            </div>

            :

            <>
            
                <hr/>
                <h3>Usted eligío el {numero}</h3>
                <h3>Salió el numero: {sorteo}</h3>
                <h3>{sorteo==numero? "ha ganado" : "Siga participando"}</h3>
                <br/>

                <button onClick={()=> {
                    setResult(false)
                    setNumero(1)
                }}> Volver a Jugar</button>
            
            
            </>

        }

    </div>

);
   
}

export default AdivinaComponent;