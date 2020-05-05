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
import Soporte from "../pages/Soporte"
import Maximiza from "../pages/maximiza"
import Registro from "../pages/Registro"
import Layout from "../Components/Layout"
import Online from "../pages/OnlinePrincipal"
import Clientes from "../pages/Clientes";
import Productos from "../pages/productos"
import FormEmpleados from "../Components/FormularioEmpleados"
import ListaEmpleados from "../Components/ListaEmpleados"
import Verproveedore from "../pages/proveedores/VerProveedor"
import CrearProveedor from "../pages/proveedores/CrearProveedor"
import {Context} from "../Context"

const Routes=()=>{
    const {isAuth}=useContext(Context)
    console.log(isAuth)
    return(
        <Layout>
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
            <Quienes path="/quienessomos"/>
            <Soporte path="/soporte"/>
            <Maximiza path="/Maximiza"/>
            <Registro path="/registro"/>
            <Online path="/online"/>
            <FormEmpleados path="/agregarEmpleado"/>
            <ListaEmpleados path="/listaEmpleados "/>
            <Clientes path="/clientes"/>
            <Productos path="/productos"/>
            <Verproveedore path="/verProveedor"/>
            <CrearProveedor path="/crearProveedor"/>



            
            
         

         </Router>

         </Layout>
    )
}
export default Routes;