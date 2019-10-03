import React from 'react';
import '../Styles/Carts.scss'
import {Link} from "@reach/router"

import home from '../img/home.svg'
import cogs from '../img/cogs.svg'
import mak from '../img/Mak.svg'


class carts extends React.Component{
    render(){
        return(
            <div>
            <div className="Container-Carts">    
                  <div className="Carts">
                      <img src={home} className="Home" alt=""/>
                      <Link to="/QuienesSomos">
                      <p className="p">Quiénes somos</p>
                      </Link>
                                        </div>

                  <div className="Carts">
                      <img src={cogs} className="Home" alt=""/>
                      <p className="p">Soporte técnico</p>
                  </div>

                  <div className="Carts">
                      <img src={mak} className="Home" alt=""/>
                      <p className="p">Maximiza tus ventas</p>
                  </div>
            </div>
            </div>
        )
    }
}
export default carts;