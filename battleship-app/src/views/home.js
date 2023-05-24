import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="container-fluid pt-5 border text-center" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-md-12 col-12">
          <h1 className="text-white">BATTLESHIP</h1>
          <p></p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-12 pt-5">
          <Link id="button" className="btn btn-lg btn-danger shadow-lg " to="/game">
            Nueva Partida
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
