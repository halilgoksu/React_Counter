import React from "react";

const Count = ({ counter, resset, increase, reduce }) => {
  return (
    <div className="increase-reduce-resset">
      <div className="increase-reduce">
      <button className="increase" onClick={increase}>+</button>
      <button className="reduce" onClick={reduce}>-</button>
      </div>
      <button className="resset-btn" onClick={resset}>resset</button>

    </div>
  );
};

export default Count;
