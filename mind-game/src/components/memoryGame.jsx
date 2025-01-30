import React, { useEffect, useState } from "react";
import flipSound from "../../public/flip.mp3";
import winSound from "../../public/win.mp3";
import loseSound from "../../public/lose.mp3";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlippled] = useState([]);
  const [solved, setSolved] = useState([]);
  const [won, setWon] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [minMoves, setMinMoves] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Timer (60 sec)
  const [timerRunning, setTimerRunning] = useState(false);

  const flipAudio = new Audio(flipSound);
  const winAudio = new Audio(winSound);
  const loseAudio = new Audio(loseSound);

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({
        id: index,
        number,
      }));

    setCards(shuffledCards);
    setFlippled([]);
    setSolved([]);
    setWon(false);
    setMoves(0);
    setGameOver(false);
    setTimeLeft(60); // Reset timer
    setTimerRunning(true);
  };

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setTimerRunning(false);
      loseAudio.play();
    }
  }, [timeLeft, timerRunning]);

  useEffect(() => {
    if (moves > minMoves) {
      setGameOver(true);
      setTimerRunning(false);
      loseAudio.play();
    }
  }, [moves, minMoves]);

  useEffect(() => {
    if (
      solved.length === cards.length &&
      cards.length > 0 &&
      moves <= minMoves
    ) {
      setWon(true);
      setTimerRunning(false);
      winAudio.play();
    }
  }, [solved, cards, moves, minMoves]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped;

    if (cards[firstId].number === cards[secondId].number) {
      setSolved([...solved, firstId, secondId]);
      setFlippled([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlippled([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (disabled || won || gameOver) return;

    flipAudio.play();

    if (flipped.length === 0) {
      setFlippled([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlippled([...flipped, id]);
        setMoves((prev) => {
          const newMoves = prev + 1;
          if (newMoves > minMoves) setGameOver(true);
          return newMoves;
        });

        checkMatch(id);
      } else {
        setFlippled([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>

      <div className="mb-4 flex space-x-4">
        <label htmlFor="gridSize">Grid Size:</label>
        <input
          id="gridSize"
          type="number"
          min="2"
          max="10"
          value={gridSize}
          onChange={(e) => setGridSize(parseInt(e.target.value))}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />

        <label htmlFor="minMoves">Min Moves:</label>
        <input
          id="minMoves"
          type="number"
          min="1"
          value={minMoves}
          onChange={(e) => setMinMoves(parseInt(e.target.value))}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="mb-2 text-lg font-semibold">
        Moves: {moves} / {minMoves} | Time Left: {timeLeft}s
      </div>

      <div
        className="grid gap-2 mb-4"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
          width: `min(100%, ${gridSize * 5.5}rem)`,
        }}
      >
        {cards.map((card) => (
          <div
            onClick={() => handleClick(card.id)}
            className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 ${
              isFlipped(card.id)
                ? isSolved(card.id)
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-400"
            }`}
            key={card.id}
          >
            {isFlipped(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>

      {won && (
        <div className="mt-4 text-4xl font-bold text-green-500">You Won!!!</div>
      )}
      {gameOver && (
        <div className="mt-4 text-4xl font-bold text-red-500">Game Over!</div>
      )}

      <button
        onClick={initializeGame}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        {won || gameOver ? "Play Again" : "Reset"}
      </button>
    </div>
  );
};

export default MemoryGame;
