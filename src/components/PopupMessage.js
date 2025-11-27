import React from "react";

const PopupMessage = ({ message, onClose, onNewGame }) => {
  const handleCloseClick = () => {
    console.log("Close button clicked - closing popup");
    onClose(); // This should call setShowPopup(false) in App.js
  };

  const handleNewGameClick = () => {
    console.log("New Game button clicked");
    onNewGame(); // This should reset the game AND close popup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-content">
          <h2>{message}</h2>
          <div className="popup-buttons">
            <button className="popup-button close" onClick={handleCloseClick}>
              Close
            </button>
            <button
              className="popup-button new-game"
              onClick={handleNewGameClick}
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
