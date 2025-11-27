import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import PopupMessage from "./components/PopupMessage";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  console.log("App rendered - showPopup:", showPopup); // Debug log

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  useEffect(() => {
    if (winner) {
      setPopupMessage(`${winner.player} Won the Match! 🎉`);
      setShowPopup(true);
    } else if (isDraw) {
      setPopupMessage("It's a Draw! 🤝");
      setShowPopup(true);
    }
  }, [winner, isDraw]);

  const handleClick = (i) => {
    if (winner || squares[i] || showPopup) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    console.log("RESET GAME CALLED");
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setShowPopup(false);
    setPopupMessage("");
  };

  const closePopup = () => {
    console.log("CLOSE POPUP CALLED");
    resetGame(); // resets the game when closing
  };

  let status;
  if (winner) {
    status = `Winner: ${winner.player}`;
  } else if (isDraw) {
    status = "Game ended in a draw!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Tic Tac Toe</h1>
      </header>

      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            winningLine={winner ? winner.line : []}
            onClick={handleClick}
          />
        </div>

        <div className="game-info">
          <GameStatus status={status} onReset={resetGame} />
        </div>
      </div>

      {showPopup && (
        <PopupMessage
          message={popupMessage}
          onClose={closePopup}
          onNewGame={resetGame}
        />
      )}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        player: squares[a],
        line: [a, b, c],
      };
    }
  }
  return null;
}

export default App;
