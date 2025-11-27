import React from "react";
import Square from "./Square";

const Board = ({ squares, winningLine, onClick }) => {
  const renderSquare = (i) => {
    const isWinning = winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        isWinning={isWinning}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

export default Board;
