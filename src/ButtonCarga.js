import React from "react";

function ButtonCarga({cargando}){
    return (
        <div>
            {cargando === true ? <button>Cargando</button> : <button>Listo</button>}
            
        </div>
    )
}

export default ButtonCarga