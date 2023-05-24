import Board from "../components/setBoard";
import { Link } from 'react-router-dom'

function UserBoard() {
  return (
    <div className="pt-5 pb-4 text-center"
    style={{height: '100vh'}}>
      <h1>BATTLESHIP</h1>
      <h2>Posicione sus botes</h2>
      <Board />
      <br></br>
    <Link to="/" className="btn btn-primary">Home</Link>
    <Link to="/cpu" className="btn btn-primary">Next</Link>
    </div>
  );
}

export default UserBoard;
