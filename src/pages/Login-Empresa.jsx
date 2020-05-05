import React, { useState, useContext } from "react";
import Particles from "react-particles-js";
import { Context } from "../Context";
import "../Styles/LoginEmpresa.scss";
import { Redirect } from "@reach/router";

import log from "../img/login.jpg";
import logo from "../img/logo.svg";
const LoginEmpresa = () => {
  const { autenticar } = useContext(Context);
  const [CodigoEmpresa, setCodigoEmpresa] = useState("");
  const [Contrasenia, setContrasenia] = useState("");
  const [redirect, setredirect] = useState(false);
  console.log(CodigoEmpresa, Contrasenia);

  fetch("url", {
    method: "GET"
  });

  const handleClick = e => {
    console.log("EL boton se presiona");
  };
  const handleCodigoEmpresa = e => {
    setCodigoEmpresa(e.target.value);
  };
  const handleContrasenia = e => {
    setContrasenia(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form vas submited");
    autenticar("tokenAPI");
    setredirect(true); //redirije 
  };
  const particleOPT = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#000000"
      },
      size: {
        value: 3,
        random: false,
        anim: {
          speed: 30,
          size_min: 0.1,
          sync: false
        },
        opacity: {
          value: 1000,
          random:false
        }
      },
      line_linked: {
        enable: true,
        random:false,
        distance: 80,
        color: "#7DAE45",
        opacity: 1000,
        width: 1.5
      }
    }
  };

  return (
    <div>
      <div className="particles">
        <Particles params={particleOPT} />
      </div>

    
      <div>
        <img src={log} className="img-log" alt="" />
        <div className="login">
          <img src={logo} className="logo1" alt="" />
          <h1 className="log-Domi">DomiTiendas</h1>

          <form onSubmit={handleSubmit}>
            <label className="textlog">Codigo de la empresa</label>
            <input
              type="text"
              className="prueba"
              onChange={handleCodigoEmpresa} //Evento onChange y metodo Handle
              value={CodigoEmpresa}
              name="CodigoEmpresa"
            />
            <label className="text-co">Contraseña</label>
            <input
              type="password"
              className="prueba2"
              onChange={handleContrasenia}
              value={Contrasenia}
              name="Contrasenia"
            />
            <button className="ingresar" onClick={handleClick}>
              Ingresar
            </button>
          </form>
        </div>
      </div>
      
      {redirect ?
       <Redirect to="/principal" /> : 
       null}

   
    </div>
  );
};

export default LoginEmpresa;
