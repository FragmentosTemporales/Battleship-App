const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      ship: []
    },
    actions: {
      handleClick: (id) => {
        const { ship } = getStore();

        if (ship.includes(id)) {
          alert("Casilla ya registrada");
        } else {
          const updatedShip = [...ship, id];
          setStore({ ship: updatedShip });
          console.log("ID recibido:", id);
          alert("Nave actualizada")
        }
      }
    }
  };
};

export default getState;
