import React,{useContext} from 'react';
import logo from '../img/logo.svg'
import '../Styles/NavBar.scss'
import {Link} from "@reach/router"
import {Context} from "../Context"

 const Navbar=()=>{
     const{isAuth}=useContext(Context)
     return(
        <div className='Navbar'>
        <a href="/" className="Navbar_Brand">
            <img src={logo} className="logo" alt=""/>
            <span className="Domi">DomiTiendas</span>
        </a>
        <div className="Botones">
        {
            !isAuth?(
                <>
                <Link className="B1" to="/login">Ingresar</Link>
                <button className="B2">Registrarse</button>
                </>
            ):null
        }
            
        </div>
    </div>
     )
 }

export default Navbar;