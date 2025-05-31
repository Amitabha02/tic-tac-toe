import React, { useState } from "react";
import Square from "./Square";
const Board = (props) => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  console.log(state);

  const checkWinner = () => {
    const winnerLogic = [
      //For all the rows horizontal possibilities if these are equal show winner
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      //For all the rows vertical possibilities if these are equal show winner
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      //For all the diagonal possibilities if these are equal show winner
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) return;

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = ()=>{
    setState(Array(9).fill(null));

  }

  const isBoardFull = state.every((cell) => cell!= null);

  const isDraw = !isWinner && isBoardFull;


  return (

    <div className= "flex items-center justify-center min-h-screen">
    <div className="board-Container items-center justify-center w-1/3">

    {/* If there is a winner */}
      {isWinner ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <span className="text-green-400 text-4xl font-semibold text-center">
            {isWinner} Won the game
          </span>

          <button
            className="text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black font-semibold px-4 py-2 rounded-xl transition duration-200 shadow-md m-4"
            onClick={() => handleReset()}
          >
            Play Again
          </button>
        </div>
      )
      
      //If the match is draw

      : isDraw ? 

      <div className="flex flex-col items-center justify-center h-screen">
          <span className="text-green-400 text-4xl font-semibold text-center">
            Math Draw click on the below button to play again
          </span>

          <button
            className="text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black font-semibold px-4 py-2 rounded-xl transition duration-200 shadow-md m-4"
            onClick={() => handleReset()}
          >
            Play Again
          </button>
        </div>
      
      :
        // Starting a new Match
        (
        <>
          <h1 className=" flex text-4xl font-semibold text-green-500 justify-center align-center">
            Tic Tac Toe Game
          </h1>
          <h1 className=" flex text-2xl m-2 text-white font-semibold justify-center align-center">Player {isXTurn ? `X's Turn` : `O's Turn`} turn</h1>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>

          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>

          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>

    </div>
  );
};

export default Board;
