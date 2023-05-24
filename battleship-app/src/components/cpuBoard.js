import React from "react";
import { useContext, useEffect  } from "react";
import { Context } from "../store/context";
import "./setBoard.css";

const CpuBoard = () => {
  const { store } = useContext(Context);
  const {cpuShip} = store
  useEffect(() => {
    cpuShip.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add("bg-danger");
      }
    });
  }, [cpuShip]);
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
        <div className="col border bg-primary text-white">1</div>
        <div
          className="col border"
          id="11"
        ></div>
        <div
          className="col border"
          id="12"
        ></div>
        <div
          className="col border"
          id="13"
        ></div>
        <div
          className="col border"
          id="14"
        ></div>
        <div
          className="col border"
          id="15"
        ></div>
        <div
          className="col border"
          id="16"
        ></div>
        <div
          className="col border"
          id="17"
        ></div>
        <div
          className="col border"
          id="18"
        ></div>
        <div
          className="col border"
          id="19"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">2</div>
        <div
          className="col border"
          id="21"
        ></div>
        <div
          className="col border"
          id="22"
        ></div>
        <div
          className="col border"
          id="23"
        ></div>
        <div
          className="col border"
          id="24"
        ></div>
        <div
          className="col border"
          id="25"
        ></div>
        <div
          className="col border"
          id="26"
        ></div>
        <div
          className="col border"
          id="27"
        ></div>
        <div
          className="col border"
          id="28"
        ></div>
        <div
          className="col border"
          id="29"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">3</div>
        <div
          className="col border"
          id="31"
        ></div>
        <div
          className="col border"
          id="32"
        ></div>
        <div
          className="col border"
          id="33"
        ></div>
        <div
          className="col border"
          id="34"
        ></div>
        <div
          className="col border"
          id="35"
        ></div>
        <div
          className="col border"
          id="36"
        ></div>
        <div
          className="col border"
          id="37"
        ></div>
        <div
          className="col border"
          id="38"
        ></div>
        <div
          className="col border"
          id="39"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">4</div>
        <div
          className="col border"
          id="41"
        ></div>
        <div
          className="col border"
          id="42"
        ></div>
        <div
          className="col border"
          id="43"
        ></div>
        <div
          className="col border"
          id="44"
        ></div>
        <div
          className="col border"
          id="45"
        ></div>
        <div
          className="col border"
          id="46"
        ></div>
        <div
          className="col border"
          id="47"
        ></div>
        <div
          className="col border"
          id="48"
        ></div>
        <div
          className="col border"
          id="49"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">5</div>
        <div
          className="col border"
          id="51"
        ></div>
        <div
          className="col border"
          id="52"
        ></div>
        <div
          className="col border"
          id="53"
        ></div>
        <div
          className="col border"
          id="54"
        ></div>
        <div
          className="col border"
          id="55"
        ></div>
        <div
          className="col border"
          id="56"
        ></div>
        <div
          className="col border"
          id="57"
        ></div>
        <div
          className="col border"
          id="58"
        ></div>
        <div
          className="col border"
          id="59"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">6</div>
        <div
          className="col border"
          id="61"
        ></div>
        <div
          className="col border"
          id="62"
        ></div>
        <div
          className="col border"
          id="63"
        ></div>
        <div
          className="col border"
          id="64"
        ></div>
        <div
          className="col border"
          id="65"
        ></div>
        <div
          className="col border"
          id="66"
        ></div>
        <div
          className="col border"
          id="67"
        ></div>
        <div
          className="col border"
          id="68"
        ></div>
        <div
          className="col border"
          id="69"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">7</div>
        <div
          className="col border"
          id="71"
        ></div>
        <div
          className="col border"
          id="72"
        ></div>
        <div
          className="col border"
          id="73"
        ></div>
        <div
          className="col border"
          id="74"
        ></div>
        <div
          className="col border"
          id="75"
        ></div>
        <div
          className="col border"
          id="76"
        ></div>
        <div
          className="col border"
          id="77"
        ></div>
        <div
          className="col border"
          id="78"
        ></div>
        <div
          className="col border"
          id="79"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">8</div>
        <div
          className="col border"
          id="81"
        ></div>
        <div
          className="col border"
          id="82"
        ></div>
        <div
          className="col border"
          id="83"
        ></div>
        <div
          className="col border"
          id="84"
        ></div>
        <div
          className="col border"
          id="85"
        ></div>
        <div
          className="col border"
          id="86"
        ></div>
        <div
          className="col border"
          id="87"
        ></div>
        <div
          className="col border"
          id="88"
        ></div>
        <div
          className="col border"
          id="89"
        ></div>
      </div>
      <div className="row ">
        <div className="col border bg-primary text-white">9</div>
        <div
          className="col border"
          id="91"
        ></div>
        <div
          className="col border"
          id="92"
        ></div>
        <div
          className="col border"
          id="93"
        ></div>
        <div
          className="col border"
          id="94"
        ></div>
        <div
          className="col border"
          id="95"
        ></div>
        <div
          className="col border"
          id="96"
        ></div>
        <div
          className="col border"
          id="97"
        ></div>
        <div
          className="col border"
          id="98"
        ></div>
        <div
          className="col border"
          id="99"
        ></div>
      </div>
    </div>
  );
};

export default CpuBoard;
