import React from "react";
import NavBar from "../Components/NavBar";
import Cart from "../Components/carts";

import img from "../img/12.png";
import fondo from "../img/fondo.png";
import stock from "../img/stock.jpg"
import pay from "../img/payment.jpg"

import "../Styles/Principal.scss";

class principal extends React.Component {
  render() {
    return (
      <div>
        <section>
          <NavBar />
        </section>

        <div>
          <h1 className="H1">Domitiendas</h1>
          <h2 className="H2">
            La nueva y potente herramienta de control, venta y distribución de
            inventario
          </h2>
          <img src={img} className="img" alt="" />
        </div>

        <div className="global-container">
          <img src={fondo} className="fondo" alt="" />
          <Cart />

          <div >
          <h3 className="H3">Razones para afiliar tu empresa con DomiTiendas</h3>
          <div className="container-img">

            <section className="section-img">
              <img src={stock} className="stock" alt="" />
              <p className="p1">Ahórrate dolores de cabeza y dinero con un sistema de control de inventarios confiable,
              practico y facil de usar acorde a tus necesidades.​</p>
            </section>

            <section className="section-img1">
            <p className="p1">Una de las formas en que puede mejorar y mantener su negocio es estableciendo y cultivando una buena relación con su clientes por 
            lo que traemos la funcionalidad de compras en linea y entregas a domicilio.</p>
              <img src={pay} className="pay" alt="" />
              
            </section>

          </div>
        </div>
        </div>

        
      </div>
    );
  }
}
export default principal;
