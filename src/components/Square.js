import React from "react";

const Square = ({ value, isWinning, onClick }) => {
  return (
    <button
      className={`square ${isWinning ? "winning" : ""}`}
      data-value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
