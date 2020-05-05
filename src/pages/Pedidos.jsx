import React from 'react'
import Menusize from '../Components/menusize'
import {Link} from "@reach/router"

import "../Styles/Pedidos.scss"

const Pedidos =()=>{
    return(
<div>

    <section>
        <Menusize/>
    </section>
    <h1>holaa</h1>
    <Link className="btn-IrTienda" to="/online" > Ir a la tienda</Link>
   
</div>
    )
}

export default Pedidos;