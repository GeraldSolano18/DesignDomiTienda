import React from 'react'
import {Link} from "@reach/router"

import "../Styles/Empleados.scss";

import per from "../img/per.png";
import add from "../img/add.svg";
import ver from "../img/eye.svg";


const MenuEmpleado=()=>{
return(
    <div>
    <img className="per" src={per} alt="" />
    <div className="contenedor1">
      <h1 className="empleados">Empleados</h1>
      <img className="add" src={add} alt="" />
      <Link className="agregar" to="/agregarEmpleado" >Agregar Empleado </Link>
      <img className="add" src={ver} alt="" />
      <Link className="agregar" to="/listaEmpleados"> Ver empleados</Link>
    </div>
  </div>
)
}

export default MenuEmpleado;