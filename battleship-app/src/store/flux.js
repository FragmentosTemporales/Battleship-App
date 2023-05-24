import Swal from "sweetalert2";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      ship: [],
      cpuShip: [],
      userScore: 0,
      cpuScore: 0,
      cpuFires: [],
    },
    actions: {
      handleClick: (id, navigate) => {
        const { ship } = getStore();

        if (ship.includes(id)) {
          Swal.fire({
            icon: "warning",
            title: "Casilla ya registrada",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          const updatedShip = [...ship, id];
          setStore({ ship: updatedShip });
          if (updatedShip.length === 16) {
            Swal.fire({
              icon: "success",
              title: "Flota actualizada",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/gameboard");
            getActions().setCpuShip(); // Llamada a setCpuShip después de navigate
          }
        }
      },
      setCpuShip: () => {
        const { cpuShip } = getStore();
        for (let i = 0; i < 5; i++) {
          if (i === 0) {
            const row = Math.floor(Math.random() * 9) + 1;
            const col = Math.floor(Math.random() * 8) + 1;
            const position = row.toString() + col.toString();
            let position2 = row.toString() + (col + 1).toString();

            while (cpuShip.includes(position) || cpuShip.includes(position2)) {
              const newRow = Math.floor(Math.random() * 9) + 1;
              const newCol = Math.floor(Math.random() * 8) + 1;
              position2 = newRow.toString() + newCol.toString();
            }

            cpuShip.push(position);
            cpuShip.push(position2);
          } else if (i === 1) {
            let row = Math.floor(Math.random() * 7) + 1;
            let col = Math.floor(Math.random() * 9) + 1;
            let position = row.toString() + col.toString();
            let position2 = (row + 1).toString() + col.toString();
            let position3 = (row + 2).toString() + col.toString();

            while (
              cpuShip.includes(position) ||
              cpuShip.includes(position2) ||
              cpuShip.includes(position3)
            ) {
              row = Math.floor(Math.random() * 7) + 1;
              col = Math.floor(Math.random() * 9) + 1;
              position = row.toString() + col.toString();
              position2 = (row + 1).toString() + col.toString();
              position3 = (row + 2).toString() + col.toString();
            }

            cpuShip.push(position);
            cpuShip.push(position2);
            cpuShip.push(position3);
          } else if (i === 2) {
            let row = Math.floor(Math.random() * 9) + 1;
            let col = Math.floor(Math.random() * 7) + 1;
            let position4 = row.toString() + col.toString();
            let position5 = row.toString() + (col + 1).toString();
            let position6 = row.toString() + (col + 2).toString();

            while (
              cpuShip.includes(position4) ||
              cpuShip.includes(position5) ||
              cpuShip.includes(position6)
            ) {
              row = Math.floor(Math.random() * 9) + 1;
              col = Math.floor(Math.random() * 7) + 1;
              position4 = row.toString() + col.toString();
              position5 = row.toString() + (col + 1).toString();
              position6 = row.toString() + (col + 2).toString();
            }

            cpuShip.push(position4);
            cpuShip.push(position5);
            cpuShip.push(position6);
          } else if (i === 3) {
            let row = Math.floor(Math.random() * 6) + 1;
            let col = Math.floor(Math.random() * 9) + 1;
            let position7 = row.toString() + col.toString();
            let position8 = (row + 1).toString() + col.toString();
            let position9 = (row + 2).toString() + col.toString();
            let position10 = (row + 3).toString() + col.toString();

            while (
              cpuShip.includes(position7) ||
              cpuShip.includes(position8) ||
              cpuShip.includes(position9) ||
              cpuShip.includes(position10)
            ) {
              row = Math.floor(Math.random() * 7) + 1;
              col = Math.floor(Math.random() * 9) + 1;
              position7 = row.toString() + col.toString();
              position8 = (row + 1).toString() + col.toString();
              position9 = (row + 2).toString() + col.toString();
              position10 = (row + 3).toString() + col.toString();
            }

            cpuShip.push(position7);
            cpuShip.push(position8);
            cpuShip.push(position9);
            cpuShip.push(position10);
          } else {
            let row = Math.floor(Math.random() * 9) + 1;
            let col = Math.floor(Math.random() * 6) + 1;
            let position11 = row.toString() + col.toString();
            let position12 = row.toString() + (col + 1).toString();
            let position13 = row.toString() + (col + 2).toString();
            let position14 = row.toString() + (col + 3).toString();

            while (
              cpuShip.includes(position11) ||
              cpuShip.includes(position12) ||
              cpuShip.includes(position13) ||
              cpuShip.includes(position14)
            ) {
              row = Math.floor(Math.random() * 9) + 1;
              col = Math.floor(Math.random() * 6) + 1;
              position11 = row.toString() + col.toString();
              position12 = row.toString() + (col + 1).toString();
              position13 = row.toString() + (col + 2).toString();
              position14 = row.toString() + (col + 3).toString();
            }

            cpuShip.push(position11);
            cpuShip.push(position12);
            cpuShip.push(position13);
            cpuShip.push(position14);
          }
        }
      },
      fireTorpedo: (id, navigate) => {
        const element = document.getElementById(id);
        const { cpuShip, userScore } = getStore();

        if (cpuShip.includes(id)) {
          element.classList.add("bg-danger");
          setStore({
            userScore: userScore + 1,
          });
          if (userScore + 1 === 16) {
            Swal.fire({
              icon: "success",
              title: "¡Haz Ganado!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        } else {
          element.classList.add("bg-info");
        }
        getActions().cpuFire();
      },
      cpuFire: () => {
        const { ship, cpuFires, cpuScore } = getStore();
        let position = "";

        do {
          const row = Math.floor(Math.random() * 9) + 1;
          const col = Math.floor(Math.random() * 8) + 1;
          position = row.toString() + col.toString();
        } while (cpuFires.includes(position));

        cpuFires.push(position);

        if (ship.includes(position)) {
          const newCpuScore = cpuScore + 1;
          setStore({ cpuScore: newCpuScore });
          if (newCpuScore === 16) {
            Swal.fire({
              icon: "error",
              title: "¡Haz perdido!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      },
    },
  };
};

export default getState;
