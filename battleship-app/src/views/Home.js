import Board from "../components/setBoard";

function UserBoard() {
  function handleClick() {
    window.location.reload();
  }
  return (
    <div className="pt-5 pb-4 text-center"
    style={{height: '100vh'}}>
      <h1 className="text-white">BATTLESHIP</h1>
      <br></br>
      <h3 className="text-white">¡Coloca tus naves en posición!</h3>
      <br></br>
      <Board />
      <br></br>
    <button className="btn btn-danger btn-lg" onClick={handleClick}>Reiniciar</button>
    </div>
  );
}

export default UserBoard;
