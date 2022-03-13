import React, { useState } from "react";
import Change from "./Change";
import Count from "./Count";
import "./counter.css";
import Hide from "./Hide";

function CounterApp() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState(false);
  const [toggle,setToggle]= useState(false)

  const changetext = () => {
    setTitle((prev)=>!prev);
  };

  const HideCounter=()=>{
    setToggle((prev)=> !prev);
   
  }

 

  const increase = () => {
    setCounter(counter + 1);
  };

  const reduce = () => {
    setCounter(counter - 1);
  };
  const resset = () => {
    setCounter(0);
    
  };

  return (
    <container className="body">
      <div className="counter-container">
        <h1 className={title ?"count-title": 'change-title'}>Counter</h1>

        <h1 className={toggle ? 'count-number' : 'hide'}>{counter}</h1>
        <div className="buttons">
          <Hide HideCounter={HideCounter} setCounter={setCounter}></Hide>
          <Count
            counter={counter}
            increase={increase}
            reduce={reduce}
            resset={resset}
          ></Count>
          <Change title={title}  changetext={changetext}></Change>
        </div>
      </div>
    </container>
  );
}

export default CounterApp;
