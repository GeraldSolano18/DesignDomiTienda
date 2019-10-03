import React from "react";
// import {Link} from "@reach/router";
// import {Context} from "../Context"


import NavBar from "../Components/NavBar";
import Menusize from "../Components/menusize"

class principalEmpresa extends React.Component {
  render() {
    return (
      <div>
        <section>
          <NavBar />
        </section>
        <section>
          <Menusize/>
        </section>
        
        <div >

        </div>
      </div>
    );
  }
}
export default principalEmpresa;
