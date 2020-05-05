import React, { useState, useContext } from "react";
import Menusize from "../Components/menusize";
import MenuEmpleados from "../Components/menuEmpleados" 



const Empleados = () => {

  return (
    <div>
      <section >
          <Menusize />  
      </section>
      <section>
      < MenuEmpleados/>
      </section>

    </div>
  );
};
export default Empleados;
