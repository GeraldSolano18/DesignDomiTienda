import React from "react";
import "../Styles/Graficos.scss";
import Menusize from "../Components/menusize";
import Chart1 from "../Components/Chart1";
import Chart2 from "../Components/Chart2";
import cir from "../img/circle.svg";

const Graficos = () => {
  return (
    <div>
      <section>
        <Menusize />
      </section>
      <div className="cuadro1">
        <div>
          <Chart1 />
        </div>

        <div>
          <Chart2 />
        </div>
      </div>
    </div>
  );
};
export default Graficos;
