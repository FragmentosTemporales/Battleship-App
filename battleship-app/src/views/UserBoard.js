import Board from "../components/setBoard";
import { Link } from 'react-router-dom'

function UserBoard() {
  return (
    <div className="pt-5 pb-4 text-center"
    style={{height: '100vh'}}>
      <h1 className="text-white">BATTLESHIP</h1>
      <br></br>
      <h3 className="text-white">¡Coloca tus naves en posición!</h3>
      <br></br>
      <Board />
      <br></br>
    <Link to="/" className="btn btn-lg shadow btn-danger">INICIO</Link>
    </div>
  );
}

export default UserBoard;
