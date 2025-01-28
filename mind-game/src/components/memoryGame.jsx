import React, { useEffect, useState } from "react";

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

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridSize(size);
  };

  const handleMinMovesChange = (e) => {
    const min = parseInt(e.target.value);
    if (min > 0) setMinMoves(min);
  };

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
  };
  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      if (moves < minMoves) {
        setWon(true);
      } else {
        setGameOver(true);
      }
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

    if (flipped.length === 0) {
      setFlippled([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlippled([...flipped, id]);
        setMoves((prev) => prev + 1);
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

      <div className="mb-4">
        <label htmlFor="gridSize" className="mr-2">
          Grid Size:
        </label>
        <input
          id="gridSize"
          type="number"
          min="2"
          max="10"
          value={gridSize}
          onChange={handleGridSizeChange}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />

        <label htmlFor="minMoves" className="mr-2">
          Min Moves:{" "}
        </label>
        <input
          type="number"
          id="minMoves"
          min="1"
          value={minMoves}
          onChange={handleMinMovesChange}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="mb-2 text-lg font-semibold">
        Moves : {moves}/{minMoves}
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
            className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300  ${
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
        <div className="mt-4 text-4xl font-bold text-green-500 animate-bounce">
          You Won!!!
        </div>
      )}

      {gameOver && (
        <div className="mt-4 text-4xl font-bold text-red-500">
          Game Over! Exceeded {minMoves} moves.
        </div>
      )}

      <button
        onClick={initializeGame}
        className="mt-4 px-4 py-2 bg-green-500  text-white rounded hover:bg-green-600 transition-colors cursor-pointer"
      >
        {won ? "Play Again" : "Reset"}
      </button>
    </div>
  );
};

export default MemoryGame;
