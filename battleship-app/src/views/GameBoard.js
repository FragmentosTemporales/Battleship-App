import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";
import GameBoard from "../components/gameBoard";


function GameShowBoard() {
  const { store } = useContext(Context);
  const { userScore, cpuScore } = store;
  
  return (
    <div style={{ minHeight: "100vh" }} className="pt-5">
      <div className="text-center">
        <h1 className="text-white">BATTLESHIP</h1>
      </div>
      <br></br>
      <div className="text-center">
      <h1 className="text-white">
          {userScore} - {cpuScore}
        </h1>
      </div>

      <GameBoard />
      <br></br>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-lg shadow-lg btn-danger">INICIO</button>
        </Link>
      </div>
    </div>
  );
}

export default GameShowBoard;
