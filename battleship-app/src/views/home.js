import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div 
    style={{height: '100vh'}}>
      <header>
        <h1>BATTLESHIP</h1>
        <Link
          className="btn btn-primary"
          to="/game"
        >
          New Game
        </Link>
        <Link to="/cpu" className="btn btn-primary">CPU</Link>
      </header>
    </div>
  );
}

export default Home;
