import React from "react";
import "../Styles/menuSize.scss"
import {Link} from "@reach/router"

const MenuSize=()=>{
return(
    <div className="MenuContainer">
        <form action="">
            <label  className="buscar">Buscar</label>
            <input type="text" name="Buscar" className="entrada"/>

            <div className="BotonEmple">
            <Link className="BotonEmple1" to="/dasboard">Dashboard</Link>
            </div>

            <div className="BotonEmple">
            <Link className="BotonEmple1" to="/empleados">Empleados</Link>
            </div>

            <div className="BotonEmple">
            <Link className="BotonEmple1" to="/inventory">Inventario</Link>
            </div>

            <div className="BotonEmple">
            <Link className="BotonEmple1" to="/graficos">Graficos</Link>
            </div>

            <div className="BotonEmple">
            <Link className="BotonEmple1" to="/proveedores">Proveedores</Link>
            </div>

            <div className="BotonEmple">
            <Link className="BotonEmple1" to="/pedidos">Pedidos</Link>
            </div>
           
        </form>
</div>
)
}
export default MenuSize;



