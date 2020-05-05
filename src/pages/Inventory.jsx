import React from "react";

import logo from "../img/logo.svg";
import Menusize from "../Components/menusize";
import TableInventory from "../Components/tableInventory";
import data from "../data/Inventory.json";

import "../Styles/Inventory.scss";

const Iventory = () => {
  return (
    <div>
      <section>
        <Menusize />
      </section>

      <div className="cuadro1">

        <div >
          <form action="" className="Padre">
            <img src={logo} className="logoInv" alt="" />
            <h1 className="texto">Nuevo inventario</h1>
            <label className="texto">Nombre del inventario</label>
            <input type="text" className="caja" />
            <label className="texto">Descripcion del inventario</label>
            <input type="text" className="caja" />
            <button className="boton1 ">Agregar</button>
          </form>
        </div>

       
          <div >
            <TableInventory data={data} />
          </div>
       



      </div>
    </div>
  );
};
export default Iventory;
