import React,{useState} from "react";

function UseState(){

    const [incrementar, setIncrementar]=useState(0)

    function incrementarNumero(){
        setIncrementar(incrementar+1)
        console.log(incrementar)
    }

    return(
        <div>
            <h3>Current Count: {incrementar}</h3>
            <h3>Previous Count: {incrementar -1}</h3>
            <button onClick={incrementarNumero} >Incrementar</button>
        </div>
    )
}

export default UseState