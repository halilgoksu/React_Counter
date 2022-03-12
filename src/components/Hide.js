import React from "react";

const Hide = ({ setCounter }) => {
  const Hide = () => {
   setCounter(false);
  };
  return (
    <div>
      <button className="hide-btn" onClick={Hide}>Hide</button>
    </div>
  );
};

export default Hide;
