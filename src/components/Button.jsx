import React from "react";

export const Button = ({ getElementRandom, style }) => {
  return (
    <button className="button" style={style} onClick={getElementRandom}>
      <i className="bx bx-chevron-right button__ico"></i>
    </button>
  );
};
