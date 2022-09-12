import { useState, useEffect } from "react";
import ReactDOM  from "react-dom/client";

export function CountCalc(){
    const[count, setCount] = useState(0);
    const[calc, setCalc] = useState(0);

    useEffect(() =>{
        let timer = setTimeout(() => {
            setCalc(() =>count*2);    
        }, 500);
        return () => clearTimeout(timer);
    },[count]);
    
return (
    <>
    <h1>Count :{count}</h1>
    <button onClick={()=>setCount(() => count + 1)}>+</button>
    <h1>Calculaiton:{calc}</h1>
    </>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CountCalc/>);