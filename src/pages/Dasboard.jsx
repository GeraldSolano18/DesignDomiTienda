import React from "react";
import NavBar from "../Components/NavBar";
import Menusize from "../Components/menusize";
import "../Styles/Dashboard.scss";
import img from "../img/store.png";
import carita from "../img/path.svg";
import dolar from "../img/Mask.svg"

const Dasboard = () => {
    // let mychart=document.getElementById('myChart').Context('2d'));
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section>
        <Menusize />
      </section>
      <div className="cuadro">
        <div className="container">
          <div className="barra"></div>
          <h2 className="hoala">80</h2>

          <p className="existencia">Total existencia</p>
        </div>

        <div className="container">
          <div>
            <img src={carita} className="carita" alt="" />
          </div>
          <h2 className="camisas">camisetas</h2>
          <p className="producto"> Producto mas vendido</p>
        
        </div>
        <div className="container">
        <div>
            <img src={dolar} className="carita" alt="" />
          </div>
          <h2 className="camisas">6,893.78</h2>
          <p className="ventas"> Ventas del dia</p>
        </div>
        <div class="containers">
            <canvas id="myChart"></canvas>
        </div>


      </div>

    </div>
  );
};
export default Dasboard;
