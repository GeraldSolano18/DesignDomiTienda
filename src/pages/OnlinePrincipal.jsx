import React from "react";
import NavBar from "../Components/NavBar"

import tshirt from'../img/tshirt.png'

class Online extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <NavBar/>
                </div>
                <section className="post-list">
                    <figure className="post-img">
                    <img src={tshirt} alt=""/>
                    </figure>
                    <span className=""></span>
                    <p>
                        <span></span>
                        <span></span>
                    </p>
                </section>
            </div>
        )
    }
}
export default Online;