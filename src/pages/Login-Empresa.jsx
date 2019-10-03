import React, {useState, useContext} from "react";
import NavBar from "../Components/NavBar"
import {Context} from "../Context"
import "../Styles/LoginEmpresa.scss";
import {Redirect} from "@reach/router"

import log from "../img/login.jpg"
import logo from "../img/logo.svg"
const LoginEmpresa =()=>{
    const {autenticar}=useContext(Context)
    const[CodigoEmpresa,setCodigoEmpresa ]=useState("")
    const [Contrasenia, setContrasenia]=useState("")
    const [redirect, setredirect]=useState(false)
    console.log(CodigoEmpresa, Contrasenia)
    const handleClick=e=>{
        console.log("EL btondn")
        
    }
    const handleCodigoEmpresa =e=>{
        setCodigoEmpresa(e.target.value)
    }
    const handleContrasenia=e=>{
        setContrasenia(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        console.log("Form vas submited")
        autenticar("tokenAPI")  
        setredirect(true)
    }
    return(
        <div>
             <div>
            <NavBar/>
            </div>
            <div>
             <img src={log} className="img-log" alt=""/>
             <div className="login">
                <img src={logo} className="logo1" alt=""/>
                <h1 className="log-Domi">DomiTiendas</h1>
                
                    <form onSubmit={handleSubmit}>
                    <label className="textlog"  >Codigo de la empresa</label>
                    <input type="text" className="prueba"  onChange={handleCodigoEmpresa} value={CodigoEmpresa}
                    name="CodigoEmpresa"/>
                    <label className="text-co">Contraseña</label>
                    <input type="text" className="prueba2" onChange={handleContrasenia} value={Contrasenia} name="Contrasenia"/>
                    <button className="ingresar" onClick={handleClick}>Ingresar</button>
                    </form>
                
                
             </div>

            </div>
            {redirect?<Redirect to= "/principal"/>:null}
        </div>

    )
}

       
 
export default LoginEmpresa;
