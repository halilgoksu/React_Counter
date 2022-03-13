import React from "react";

const Hide = ({ setCounter,HideCounter }) => {

  return (
    <div>
      <button className="hide-btn" onClick={HideCounter}
      >Hide</button>
    </div>
  );
};

export default Hide;
