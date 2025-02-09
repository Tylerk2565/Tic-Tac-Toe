function Square({ value, onSquareClick }) {
  return (
    <button
      className="square w-16 h-16 bg-blue-500 text-white font-bold text-xl flex items-center justify-center border-2 border-blue-700 hover:bg-blue-700 transition duration-300 ease-in-out"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;