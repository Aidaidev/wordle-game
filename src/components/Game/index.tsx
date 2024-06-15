import React from "react";
import "./Game.css";

interface GameProps {
  index: number;
  inputValue: string;
  gameClass: string;
}

export const Game: React.FC<GameProps> = ({ index, inputValue, gameClass }) => {
  return (
    <div className={`square ${gameClass}`} key={index}>
      <input
        placeholder="..."
        type="text"
        value={inputValue}
        className="square_input"
        readOnly
        disabled
      />
    </div>
  );
};
