import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlippled] = useState([]);
  const [solved, setSolved] = useState([]);
  const [won, setWon] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridSize(size);
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => {
        id: index, number;
      });
    console.log(shuffledCards, "num");
  };
  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>

      <div className="mb-4">
        <label htmlFor="gridSize" className="mr-2">
          Grid Size
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
      </div>
    </div>
  );
};

export default MemoryGame;
