import "./styles.css";
import { useState } from "react";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [shape, setShape] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isDraw = (board) => {
    return board.every((cell) => cell !== null);
  };

  const handleSelected = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = shape;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win); // Set the winner if a combination is found
    } else if (isDraw(newBoard)) {
      setWinner("Draw"); // Set "Draw" if the board is full and no winner
    } else {
      setShape((prev) => (prev === "X" ? "O" : "X")); // Switch turns
    }
  };

  return (
    <div className="App">
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="tile"
            onClick={() => handleSelected(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="status">
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Next Player: ${shape}`}
      </div>
    </div>
  );
}
