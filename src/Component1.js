

import {UserContextName} from "./UseContext";

export const ComponentOne = (Data) =>{
    debugger;
    const {userName} = UserContextName();
    return(
        <>
           <h1>{`First Component Calling... ${userName}`}</h1>
        </>
    )
}