import React, { useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlippled] = useState([]);
  const [solved, setSolved] = useState([]);
  const [won, setWon] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleGridChange = (e) => {};
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
          onChange={() => handleGridChange(e)}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />
      </div>
    </div>
  );
};

export default MemoryGame;
