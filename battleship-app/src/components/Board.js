import React from "react";
import { useContext, useEffect  } from "react";
import { Context } from "../store/context";
import "./component.css";

const Board = () => {
  const { store, actions } = useContext(Context);
  const {ship} = store
  useEffect(() => {
    ship.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add("bg-danger");
      }
    });
  }, [ship]);
  return (
    <div
      className="container d-flex border border-danger shadow-lg"
      id="board"
    >
      <div className="row">
        <div className="col border bg-primary"></div>
        <div className="col border bg-primary text-white">1</div>
        <div className="col border bg-primary text-white">2</div>
        <div className="col border bg-primary text-white">3</div>
        <div className="col border bg-primary text-white">4</div>
        <div className="col border bg-primary text-white">5</div>
        <div className="col border bg-primary text-white">6</div>
        <div className="col border bg-primary text-white">7</div>
        <div className="col border bg-primary text-white">8</div>
        <div className="col border bg-primary text-white">9</div>
      </div>
      <div className="row">
        <div className="col border bg-primary text-white">A</div>
        <div
          className="col border"
          id="A1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="A9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">B</div>
        <div
          className="col border"
          id="B1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="B9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">C</div>
        <div
          className="col border"
          id="C1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="C9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">D</div>
        <div
          className="col border"
          id="D1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="D9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">E</div>
        <div
          className="col border"
          id="E1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="E9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">F</div>
        <div
          className="col border"
          id="F1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="F9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">G</div>
        <div
          className="col border"
          id="G1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="G9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">H</div>
        <div
          className="col border"
          id="H1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="H9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">I</div>
        <div
          className="col border"
          id="I1"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I2"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I3"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I4"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I5"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I6"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I7"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I8"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
        <div
          className="col border"
          id="I9"
          onClick={(e) => actions.handleClick(e.target.id)}
        ></div>
      </div>
    </div>
  );
};

export default Board;
