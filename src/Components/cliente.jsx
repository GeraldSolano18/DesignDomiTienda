import React from "react";
import "../Styles/cliente.scss";

class Clientelist extends React.Component {
  render() {
    return (
      <div className="containerClientes">
        {this.props.cliente.map(cliente => {
          return (
            <div key={cliente.cedula} className="cajaCliente">
              <div>
                <div>
                  <img src={cliente.img} alt="" className="imgprofile" />
                </div>
              </div>
              <div>
                <p className="datos">Datos generales</p>
                <div className="textinfo">Nombre: {cliente.nombre}</div>
                <div className="textinfo">Direccion:{cliente.direccion}</div>
                <div className="textinfo">Cedula: {cliente.cedula}</div>
                <div className="textinfo">Correo:{cliente.correo}</div>
              </div>
              <div>
                <p className="datos">Datos especificos</p>
                <div className="textinfo">
                    Comercios de interes:{cliente.comercios}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Clientelist;
