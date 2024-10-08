import React from 'react';
import { useState } from 'react';
function MutableComponent (props){
// ejemplo de Hook de estado  useState//
    const [suma, setSuma]= useState (4)

    const sumar = () => {
        setSuma( suma + 1);
    }

    return(
        <div style= {{margin:30}}>
            <button onClick={() =>sumar()}> Agregar 1 </button>
            <br/>
            <span>{suma}</span>

        </div>

    );


}
export default MutableComponent;


