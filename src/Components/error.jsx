import React from "react";
import "../Styles/error.scss"
import {ErrorMessage} from 'formik'

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-messageInvalid"></div>;
  }
  if (message) {
    return <div className="form-messageInvalid">{message}</div>;
  }
  return <div className="form-messagevalid">Los datos estan correctos ✔</div>;
};

export default Error;