import { useState } from 'react';
import Board from './Board'; 

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move} className="mb-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game flex flex-col items-center justify-center bg-gray-100 p-4 min-h-screen">
      <div className="game-board mb-4">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className="list-none p-0">{moves}</ol>
      </div>
    </div>
  );
}

export default Game;