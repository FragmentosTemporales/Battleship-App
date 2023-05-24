import Board from "../components/Board";
import {Link} from 'react-router-dom'

function Game() {
  return (
    <div className="pt-5 pb-4 text-center"
    style={{height: '100vh'}}>
      <h1>BATTLESHIP</h1>
      <Board />
      <br></br>
    <Link to="/" className="btn btn-primary">Home</Link>
    <Link to="/" className="btn btn-primary">Next</Link>
    </div>
  );
}

export default Game;
