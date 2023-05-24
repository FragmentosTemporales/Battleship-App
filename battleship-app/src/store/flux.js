const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      ship: [],
      cpuShip: [],
    },
    actions: {
      handleClick: (id, navigate) => {
        const { ship } = getStore();

        if (ship.includes(id)) {
          alert("Casilla ya registrada");
        } else {
          const updatedShip = [...ship, id];
          setStore({ ship: updatedShip });
          if (updatedShip.length === 16) {
            alert("Naves actualizadas");
            navigate("/");
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
            console.log(position);
            console.log(position2);
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
            console.log(position);
            console.log(position2);
            console.log(position3);
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
            console.log(position4);
            console.log(position5);
            console.log(position6);
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
            console.log(position7);
            console.log(position8);
            console.log(position9);
            console.log(position10);
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
            console.log(position11);
            console.log(position12);
            console.log(position13);
            console.log(position14);
          }
        }
      },
    },
  };
};

export default getState;
