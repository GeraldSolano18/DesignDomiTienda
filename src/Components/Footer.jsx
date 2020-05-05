import React from "react";
import "../Styles/Footer.scss";
import Particles from "react-particles-js";
import logo from "../img/logoGreen.svg";
import Redes1 from "../img/Redes1.png";

const Footer = () => {
  const particleOPT = {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      size: {
        value: 2,
        random: false,
        anim: {
          speed: 30,
          size_min: 0.1,
          sync: false
        },
        opacity: {
          value: 1000,
          random: false
        }
      },
      line_linked: {
        enable: true
      }
    }
  };

  return (
    <div className="pruebaa">
    

      <div className="Footer">
        <div>
          <p className="H">Dejanos un mensaje</p>
          <input type="text" name="filtro" className="filtro" />
          <button className="enviar">Enviar</button>
        </div>

        <div>
          <img className="Green" src={logo} alt="" />
          <p className="pDomi">Domitiendas</p>
          <p className="H">|2019|</p>
          <p className="H">|TODOS LOS DERECHOS RESERVADOS|</p>
        </div>

        <div>
          <p className="H">Siguenos en nuestras redes</p>
          <img className="Redes" src={Redes1} alt="" />
        </div>
    <div >
        <Particles params={particleOPT} className="particless"/>
      </div>

      </div>
  
    </div>
  );
};
export default Footer;
