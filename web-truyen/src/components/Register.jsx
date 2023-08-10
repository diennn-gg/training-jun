import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authAction";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "./js/Schema";
import Toast from "./js/Toast";
import InputGroup from "./form/InputGroup";

function Register({ transitionStage }) {
  const dispatch = useDispatch();

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        name: values.name,
        password: values.password,
      };
      dispatch(registerUser(data));
    },
  });

  return (
    <div className="register auth-form d-flex align-item-center justify-content-center">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="form form-register"
        >
          <div className="form-head">
            <h2>Register</h2>
            <p>register here using your email, name, password</p>
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
              name="name"
              type="text"
              values={values.name}
              errors={errors.name}
              touched={touched.name}
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
            <InputGroup
              name="confirm_password"
              type="password"
              values={values.confirm_password}
              errors={errors.confirm_password}
              touched={touched.confirm_password}
              handleChange={handleChange}
            />
            <button className="form-btn" type="submit">Register</button>
            <div className="other">
              <font className="text-sm-medium">
                <Link className="other-name" to="/login">
                  Login
                </Link>
                &nbsp;if you already have an account!
              </font>
            </div>
          </div>
        </form>
        <Toast />
      </div>
    </div>
  );
}

export default Register;
