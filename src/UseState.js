import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";

export function Car(){
    const[car,setCar] = useState({
        brand:'Ford',
        model:'Figo',
        year:'2016',
        color:'Yellow'
    });

   const updateColor = () =>{
   setCar(previousstate => {
    return {...previousstate,color:"blue"}
   })
   }
return(
    <>
        <h1>My {car.brand} released on {car.yearyear} and color is {car.color}</h1>
        <button onClick={updateColor}>changecolor</button>
    </>
)
}
