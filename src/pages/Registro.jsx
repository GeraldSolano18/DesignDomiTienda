import React from "react";
import { Formik,ErrorMessage} from "formik";
import * as Yup from "yup";
import "../Styles/Registro.scss";
import Error from "../Components/error";

import fondo from "../img/FondoRe.png";
import logo from "../img/logo.svg";
import datos from "../img/Datos.svg";
import negocio from "../img/Negocio.svg";

const validationShema = Yup.object().shape({
  name: Yup.string()
    .min(1, "El nombre debe tener al menos un caracter")
    .max(200, "El nombre debe tener menos de 200 caracteres")
    .required("Debe ingresar un nombre"),
  cedula: Yup.string()
    .max(16, "La cedula debe tener de 16 caracteres")
    .required("Debe ingresar una cedula"),
  email: Yup.string()
    .email("Debe ingresar un correo valido")
    .max(200, "La cedula debe tener de 16 caracteres")
    .required("Debe ingresar un correo"),
  telefono: Yup.string()
    .min(1, "Debe ingresar un numero de telefono valido")
    .max(20, "el numero no debe tener mas de 20 caracteres")
    .required("Debe ingresar un numero de telefono"),
  bussname: Yup.string()
    .min(1, "Ingresar un nombre valido")
    .max(50, "Nombre debe ser menor a 50 caracteres")
    .required("Debe ingresar el nombre de su negocio"),
  busstipo: Yup.string().required("debe seleccionar un tipo de negocio"),
  bussdireccion: Yup.string().max(250, "direccion menor a 250 caracteres"),
  busstelefono :Yup.string().max(250, "direccion menor a 250 caracteres")
});

export default function registro(params) {
  return (
    <Formik
      initialValues={{
        name: "",
        cedula: "",
        email: "",
        telefono: "",
        bussname: "",
        busstipo: "",
        bussdireccion:"",
        busstelefono:""
      }}
      validationShema={validationShema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <div>
          <div className="ContainerFther">
            <img src={fondo} alt="" className="fondo" />

            <div className="white">
              <div className="hmx">
                <h1 className="Domi">DomiTiendas</h1>
                <img src={logo} alt="" />
              </div>

              <form onSubmit={handleSubmit}>
                <div className="ContainerBoss">
                  <div>
                    <div className="Datos">
                    <img src={datos} alt="" />
                    Datos Generales
                    </div>
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="box"
                        placeholder="Nombre del propietario"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={
                          touched.name && errors.name ? "Hay un error" : null
                        }
                      />
                      <Error touched={touched.name} message={errors.name} />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="cedula"
                        id="cedula"
                        class="box"
                        placeholder="Numero de cedula"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cedula}
                        className={
                          touched.cedula && errors.cedula
                            ? "Hay un error"
                            : null
                        }
                      />
                      <Error touched={touched.cedula} message={errors.cedula} />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="box"
                        placeholder="Correo electronico"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={
                          touched.email && errors.email ? "Hay un error" : null
                        }
                      />
                      <Error touched={touched.email} message={errors.email} />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="telefono"
                        id="telefono"
                        class="box"
                        placeholder="Telefono celular"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.telefono}
                        className={
                          touched.telefono && errors.telefono
                            ? "Hay un error"
                            : null
                        }
                      />
                      <Error
                        touched={touched.telefono}
                        message={errors.telefono}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="Datos">
                    <img src={negocio} alt="" />
                    Datos del negocio
                    </div>
                 
                    <div>
                      <input
                        type="text"
                        name="bussname"
                        id="bussname"
                        class="box"
                        placeholder="Nombre del negocio"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bussname}
                        className={
                          touched.bussname && errors.bussname
                            ? "Hay un error"
                            : null
                        }
                      />
                         <Error touched={touched.bussname} message={errors.bussname} />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="busstipo"
                        id="busstipo"
                        class="box"
                        placeholder="Tipo de negocio"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.busstipo}
                        className={
                          touched.busstipo && errors.busstipo
                            ? "Hay un error"
                            : null
                        }
                      />
                         <Error touched={touched.busstipo} message={errors.busstipo} />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="bussdireccion"
                        id="bussdireccion"
                        class="box"
                        placeholder="direccion del negocio"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bussdireccion}
                        className={
                          touched.bussdireccion && errors.bussdireccion
                            ? "Hay un error"
                            : null
                        }
                      />
                         <Error touched={touched.bussdireccion} message={errors.bussdireccion} />
                    </div>
                    <div>
                      <input
                        type="text"
                        class="box"
                        placeholder="Telefono celular"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.busstelefono}
                        className={
                          touched.busstelefono && errors.busstelefono
                            ? "Hay un error"
                            : null
                        }
                      />
                       <Error touched={touched.busstelefono} message={errors.busstelefono} />

                    </div>
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="sub">
                  Enviar datos
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
