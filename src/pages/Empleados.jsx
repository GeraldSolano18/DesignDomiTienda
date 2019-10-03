import React from 'react';
import NavBar from '../Components/NavBar'
import Menusize from '../Components/menusize'
import personas from "../img/personas.png"

import "../Styles/Empleados.scss"

const Empleados =()=>{
return(
    <div>
    <section>
        <NavBar/>
    </section>
    <section>
        <Menusize/>
    </section>
    <div>
       <img className="" src={personas} alt=""/>
    </div>
</div>
)
}
export default Empleados;