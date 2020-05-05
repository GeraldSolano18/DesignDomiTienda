import React from 'react'
import "../Styles/clientes.scss"
import Clientelist from "../Components/cliente"
import imge from "../img/NoPat.svg"

import MenuSize from "../Components/menusize"

class Clientes extends React.Component{
    state ={
        data:[
            { 
                "img":"https://randomuser.me/api/portraits/men/61.jpg",
                "nombre":"gerald antonio solano macias",
                "direccion":"de la rotonda a las kdnkdn",
                "cedula":"001-1233443444k",
                "correo":"geral@gmail.com",
                "comercios":"Ferreteria JENNY, Super Express"
            },
            {
                "img": "https://randomuser.me/api/portraits/men/46.jpg",
                "nombre":"Juan de los angeles",
                "direccion":"Reparto san juan de la iglesia 2 c al sur",
                "cedula":"001-040506-1094W",
                "correo":"Juan@gmail.com",
                "comercios":"Pizza HUT, AM-PM" 
            }
        ]
    }

    render(){
        return(
            <div>
                <div>
                    <MenuSize/>
                </div>
                <div className="cuadro2">
                <h1 className="clientes">Tus clientes</h1>
                < Clientelist cliente={this.state.data}/>
                
                </div>
            </div>
        )
    }


}
export default Clientes