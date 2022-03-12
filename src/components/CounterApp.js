import React, { useState } from "react";
import Change from "./Change";
import Count from "./Count";
import "./counter.css";
import Hide from "./Hide";

function CounterApp() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("counter");

  const changetext = () => {
    setTitle("Counter");
  };

 

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
        <h1 className="count-title">{title}</h1>

        <h1 className="count-number">{counter}</h1>
        <div className="buttons">
          <Hide setCounter={setCounter}></Hide>
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
