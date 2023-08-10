import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/authAction";
import { Link } from "react-router-dom";
import Toast from "./js/Toast";
import { useFormik } from "formik";
import { loginSchema } from "./js/Schema";
import InputGroup from "./form/InputGroup";

function Login({ transitionStage }) {
  const dispatch = useDispatch();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      dispatch(loginUser(data))
    },
  });

  return (
    <div className="login auth-form d-flex align-item-center justify-content-center">
      <div className="container">
        <form onSubmit={handleSubmit} className="form form-login">
          <div className="form-head">
            <h2>Log In</h2>
            <p>login here using your username and password</p>
          </div>
          <div className="field-set">
            <InputGroup
              name="email"
              type="email"
              values={values.email}
              errors={errors.email}
              touched={touched.email}
              handleChange={handleChange}
            />
            <InputGroup
              name="password"
              type="password"
              values={values.password}
              errors={errors.password}
              touched={touched.password}
              handleChange={handleChange}
            />
            <button className="form-btn" type="submit">Log In</button>
            <div className="other">
              <font className="text-sm-medium">
                You don't have an account?&nbsp;
                <Link className="other-name" to="/register">
                  Let's create an account!
                </Link>
              </font>
            </div>
          </div>
        </form>
        <Toast/>
      </div>
    </div>
  );
}

export default Login;
