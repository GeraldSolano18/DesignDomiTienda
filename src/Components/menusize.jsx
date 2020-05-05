import React from "react";
import "../Styles/menuSize.scss";
import { Link } from "@reach/router";

import graph from "../img/graph.svg";
import Dashboard from "../img/DashBoard.svg";
import Inventory from "../img/inventory.svg";
import product from "../img/product.svg";
import supp from "../img/supp.svg";
import pedido from "../img/pedido11.svg"
import clientes from "../img/Clientesapp.svg"
import job from "../img/job.svg"

const MenuSize = () => {
  return (
    <div className="MenuContainer">
      <form action="">
        <label className="buscar">Buscar</label>
        <input type="text" name="Buscar" className="entrada" />

        <div className="BotonEmple">
          <img src={Dashboard} alt="" className="menuIcon" />
          <Link className="BotonEmple1" to="/dasboard">
            Dashboard
          </Link>
        </div>

        <div className="BotonEmple">
          <img src={Inventory} alt="" className="menuIcon" />
          <Link className="BotonEmple1" to="/inventory">
            Inventario
          </Link>
        </div>
        <div className="BotonEmple">
          <img src={product} alt="" className="menuIcon" />
          <Link className="BotonEmple1" to="/productos">
            Productos
          </Link>
        </div>

        <div className="BotonEmple">
          <img src={graph} alt="" className="menuIcon" />
          <Link className="BotonEmple1" to="/graficos">
            Graficos
          </Link>
        </div>

        <div className="BotonEmple">
          <img src={supp} alt="" className="menuIcon" />
          <Link className="BotonEmple1" to="/proveedores">
            Proveedores
          </Link>
        </div>

        <div className="BotonEmple">
            <img src={clientes} alt="" className="menuIcon"/>
          <Link className="BotonEmple1" to="/clientes">
            Clientes
          </Link>
        </div>
        <div className="BotonEmple">
        <img src={pedido} alt="" className="menuIcon" />
          <Link className="BotonEmple1" to="/pedidos">
            Pedidos
          </Link>
        </div>
        <div className="BotonEmple">
        <img src={job} alt="" className="menuIcon" />
          <Link className="BotonEmple1" to="/empleados">
            Empleados
          </Link>
        </div>
      </form>
    </div>
  );
};
export default MenuSize;
