import React, { useContext } from "react";
import logo from "../img/logo.svg";
import "../Styles/NavBar.scss";
import { Link } from "@reach/router";
import { Context } from "../Context";

const Navbar = () => {
  const { isAuth } = useContext(Context);
  const { isAuth1 } = useContext(Context);

  return (
    <div className="Navbar">
      {!isAuth1 ? (
        <>
          <Link className="Navbar_Brand" to="/">
            <img src={logo} className="logo" alt="" />
            <span className="Domi">DomiTiendas</span>
          </Link>
        </>
      ) : null}

      <div className="Botones">
        {!isAuth ? (
          <>
            <Link className="B1" to="/login">
              Ingresar
            </Link>
            <Link className="B2" to="/registro">
              Registrarse
            </Link>
          </>
        ) : null}
      </div>
    </div>
 
  );
};

export default Navbar;
