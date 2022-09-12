import { useState, createContext, useContext } from "react";
import ReactDOM  from "react-dom/client";
import { ComponentOne } from "./Component1";
import { ComponentTwo } from "./Component2";
import { ComponentThree } from "./Component3";
const UserContext = createContext();

export const ParentComponent=(comp1)=>{
    const [userName,setuserName] = useState("SenthilSK");
    return(
        <>
        <UserContext.Provider value={userName}>
            <h1>{`Hello ${userName}`}</h1>
            {comp1}
        </UserContext.Provider>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ParentComponent/>);

export const UserContextName = () => useContext(UserContext);