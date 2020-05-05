import React from "react";

import logo from "../img/logo.svg";
import proveedores from "../img/proveedores.svg";

import { Link } from "@reach/router";
import "../Styles/BannerProvee.scss";
import add from "../img/add.svg";
import ver from "../img/eye.svg";

const Banner = () => {
  return (
    <div>
      <div className="proveedoresCont">
        <div className="col_contenido">
          <div className="izquierda">
            <img src={proveedores} alt="" />
            <h1>Proveedores</h1>
          </div>

          <div className="derecha">
            <img src={logo} alt="" />
            <h2>DomiTiendas</h2>
          </div>
        </div>
        <div className="btn2">
        
         
            <Link className="btnpro" to="/verProveedor">
            <img className="iconpro" src={ver} alt="" />
            Ver proveedores
            </Link>
          
       
         
         
            <Link className="btnpro" to="/crearProveedor">
            <img className="iconpro"  src={add} alt="" /> 

              Agregar proveedores
            </Link>
         
          
          
         
        </div>
      </div>
    </div>
  );
};
export default Banner;
