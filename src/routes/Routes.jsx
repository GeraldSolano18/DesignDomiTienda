import React,{useContext} from "react"

import {Router,Redirect} from "@reach/router"
import Principal from "../pages/principal"
import LoginEmpresa from "../pages/Login-Empresa"
import PrinEmpresa from "../pages/PrincipalEmpresa"
import Dasboard from "../pages/Dasboard"
import Empleados from "../pages/Empleados"
import Inventory from "../pages/Inventory"
import Graficos from "../pages/Graficos"
import Proveedores from "../pages/Proveedores"
import Pedidos from "../pages/Pedidos"
import Quienes from "../pages/QuienesSom"
import {Context} from "../Context"

const Routes=()=>{
    const {isAuth}=useContext(Context)
    console.log(isAuth)
    return(
         <Router>
             <Principal path="/"/>
            <LoginEmpresa path="/login"/> 
            {!isAuth  && <Redirect from="/principal" to= "/login"/>}
            <PrinEmpresa path ="/principal"/>
            {isAuth &&<Redirect from="/login" to="/principal" />}
            <Dasboard path="/dasboard"/>
            <Empleados path="/empleados"/>
            <Inventory path="/inventory"/>
            <Proveedores path="/proveedores"/>
            <Pedidos path="/pedidos"/>
            <Graficos path="/graficos"/>
            <Quienes path="/QuienesSomos"/>


            
            
         

         </Router>


    )
}
export default Routes;