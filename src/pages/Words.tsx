import React from "react";
import { useWordle } from "../hooks/useWordle";
import "./Words.css";
import { Game } from "../components/Game";

const Words = () => {
  const {
    word,
    isLoading,
    guesses,
    gameOver,
    messsage,
    currentGuesses,
    currentIndex,
    getTileClass,
    initializeGame,
  } = useWordle();
  console.log(word);

  return (
    <div className="word-container">
      <h1>WORDLE</h1>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          {Array.from({ length: 6 }, (_, row) => (
            <div key={row} className="row">
              {Array.from({ length: 5 }, (_, col) => {
                const index = row * 5 + col;
                const inputValue = guesses[row][col] || "";
                const gameClass =
                  currentIndex > row || gameOver
                    ? getTileClass(inputValue, col, row)
                    : "";
                return (
                  <Game
                    key={index}
                    index={index}
                    inputValue={inputValue}
                    gameClass={gameClass}
                  />
                );
              })}
            </div>
          ))}
          {messsage && <p>Правильное слово: {word}</p>}

          {gameOver && (
            <div>
              <button onClick={initializeGame}>Начать новую игру</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Words;
