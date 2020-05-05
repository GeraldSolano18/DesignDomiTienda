import React from "react";

import logo from "../img/logo.svg";
import fondo from "../img/fondoTienda.jpg";
import pasta from "../img/vista-superior.jpg";
import cora from "../img/corazon.jpg"
import hambur from "../img/Hamgur.svg"

import "../Styles/OnlinePrincipal.scss";

class Online extends React.Component {
  render() {
    return (
      <div>
        <img src={fondo} alt="" className="fondo1" />
        <div className="presentacion">
          <img src={logo} alt="" />
          <p className="hola">Hola, como te ayudamos?</p>
        </div>

        <div className="contenedorBuss">

          <div className="Bussines">
          <h2>Farmacias</h2>
            <p>Número de vendedores:</p>
            <img src={cora} alt="pastillas" className="img__container" />
         
          </div>

          <div className="Bussines">
   
            <h2>Restaurantes</h2>
            <p>Número de vendedores:</p>
            <img src={hambur} alt="pastillas" className="img__container" />
          </div>

          <div className="Bussines">
            <img src="" alt="pastillas" className="img__container" />
            <h2>Farmacias</h2>
            <p>Número de vendedores:</p>
          </div>

        </div>
      </div>
    );
  }
}
export default Online;
