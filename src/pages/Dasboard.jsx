import React from "react";
import Menusize from "../Components/menusize";
import Chart from "../Components/Charts"

import "../Styles/Dashboard.scss";
import carita from "../img/path.svg";
import dolar from "../img/Mask.svg"


const Dasboard = () => {
    // let mychart=document.getElementById('myChart').Context('2d'));
  return (
    <div>
   
      <section>
        <Menusize />
      </section>
      <div className="cuadro">
        <div className="container">
          <div className="barra"></div>
          <h2 className="hoala">80</h2>
          <p className="existencia">Total existencias</p>
        </div>

        <div className="container">
          <div>
            <img src={carita} className="carita" alt="" />
          </div>
          <h2 className="camisas">camisetas</h2>
          <p className="producto">producto más vendido</p>
        
        </div>
        <div className="container">
        <div>
            <img src={dolar} className="carita" alt="" />
          </div>
          <h2 className="camisas">1,893.78</h2>
          <p className="ventas"> Ventas del dia</p>
        </div>
        <div className="chart">
        <Chart/>
      </div>

      </div>

      

    </div>
  );
};
export default Dasboard;
