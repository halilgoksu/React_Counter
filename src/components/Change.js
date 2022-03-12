import React from "react";

const Change = ({ changetext, title,changetext2 }) => {
  return (
    <button className="change-btn" onClick={changetext} >
      Change
    </button>
  );
};

export default Change;
