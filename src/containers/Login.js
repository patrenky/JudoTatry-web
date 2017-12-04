import React from "react";
import { withRouter } from "react-router-dom";
import { reduxForm, Field, SubmissionError } from "redux-form";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import Banner from "../components/Banner";
import Footer from "../components/Footer";

import { login } from "../actions";
import { validation } from "../utils";

const Input = ({ meta: { touched, error }, input, label, type }) => (
  <div className="form-input">
    <input {...input} name={input.name} placeholder={label} type={type} />
    {touched && error && <span className="form-invalid">{error}</span>}
  </div>
);

const Login = ({ handleSubmit }) => (
  <div>
    <Banner />
    <form onSubmit={handleSubmit} className="container form">
      <Field component={Input} name="username" label="Meno" validate={validation} />
      <Field component={Input} name="password" label="Heslo" validate={validation} />
      <button type="submit" className="form-submit">
        Prihlásiť
      </button>
    </form>
    <Footer />
  </div>
);

export default compose(
  withRouter,
  connect(null, { login }),
  withHandlers({
    onSubmit: ({ login, history }) => async formData => {
      const signSuccess = await login(formData);
      if (signSuccess) history.replace("/admin");
      else
        throw new SubmissionError({
          password: "*Nesprávne údaje"
        });
    }
  }),
  reduxForm({
    form: "sign-in"
  })
)(Login);
