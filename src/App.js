import logo from './logo.svg';
import './App.css';
import { Car } from './UseState';
import {CountCalc} from './UseEffect';
import {ParentComponent} from './UseContext';
import { ComponentOne } from "./Component1";

function App() {
  return (
    // <Car/>
    // <CountCalc/>
    <>
     <ParentComponent/>
    <ComponentOne/>
    </>
   
  );
}

export default App;
