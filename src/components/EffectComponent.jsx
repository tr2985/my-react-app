import React, { useEffect, useState } from 'react';

export const Effectcomponent = (props)=>{

    const [counter, setCounter]= useState(0);

    useEffect(() => {

        console.log("El compomente ha cambiado")

        return () => {console.log("Se ha desmontado el componente")};

    }, [counter] )
    

       



// counter es la dependencia del useEffect //
    return(

        <div>
            <button onClick ={()=> setCounter (counter+1)}>

            Inclrementar
            </button>

            <h4>Resultado: {counter}</h4>
        
        
        </div>

    )
}
export default Effectcomponent;