import React from "react";
import "../../Styles/Verpro.scss";
import Banner from "../../Components/bannerProveedor";

import MenuSize from "../../Components/menusize";

class VerProveedor extends React.Component {
  state = {
    data: [
      {
        nombre: "Holister",
        direccion: "de la rotonda a las kdnkdn",
        Responsable: "Juan Carlos Amador",
        telefono:"89876535",
        cedula: "001-1233443444k"
      },
      {
        nombre: "Nike Factory",
        direccion: "Reparto san juan de la iglesia 2 c al sur",
        Responsable: "NOMBRE DEL RESPONSABLE",
        cedula: "001-040506-1094W"
      },
      {
        nombre: "Nombre de proveedor",
        direccion: "Reparto san juan de la iglesia 2 c al sur",
        Responsable: "NOMBRE DEL RESPONSABLE",
        cedula: "001-040506-1094W"
      },
      {
        nombre: "Nombre de proveedor",
        direccion: "Reparto san juan de la iglesia 2 c al sur",
        Responsable: "NOMBRE DEL RESPONSABLE",
        cedula: "001-040506-1094W"
      }
    ]
  };
  render() {
    return (
      <div>
        <div>
          <MenuSize />
        </div>
        <div>
          <Banner />
          <div className="CajaPro">
            {this.state.data.map((proveedor) => {
              return <div key={proveedor.nombre} className="Cajapro2">
<div>
 <div>Proveedor</div>
  <div>
  Nombre: {proveedor.nombre}
  </div>
  <div>
  Direccion: {proveedor.direccion}
  </div>
  <div>
  Direccion: {proveedor.Responsable}
  </div>
  <div>
  Direccion: {proveedor.cedula}
  </div>
</div>

                  
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default VerProveedor;
