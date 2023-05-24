
import { Link } from 'react-router-dom'
import CpuBoard from '../components/cpuBoard';

function CpuShowBoard() {
  return (
    <div className="pt-5 pb-4 text-center"
    style={{height: '100vh'}}>
      <h1>BATTLESHIP</h1>
      <h2>Posiciones de la CPU</h2>
      <CpuBoard />
      <br></br>
    <Link to="/" className="btn btn-primary">Home</Link>
    <Link to="/" className="btn btn-primary">Next</Link>
    </div>
  );
}

export default CpuShowBoard;