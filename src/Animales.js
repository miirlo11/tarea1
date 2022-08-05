import React from "react";

function Animales(){
    let animales= [
        { id: 1, name: 'Fido 🐕' },
        { id: 2, name: 'Snowball 🐈' },
        { id: 3, name: 'Murph 🐈⬛' },
        { id: 4, name: 'Zelda 🐈' },
        ];

    return(
        <div> 
            <h1>Animales</h1>
        {animales.map((informacion)=>{
            return <p>{informacion.name}</p>
        })}
        </div>
    )
}

export default Animales