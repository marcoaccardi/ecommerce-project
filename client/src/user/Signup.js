import React, { useState } from "react";
import { Layout } from "../core/Layout";
import { API } from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };
  const { name, email, password } = values;

  const signup = (user) => {
    console.log(name, email, password);
    fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(user);
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    signup({ name, email, password });
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" onClick={clickSubmit}>
        Submit
      </button>
    </form>
  );
  return (
    <div>
      <Layout
        title="Signup"
        description="Signup to Node React e-commerce App"
        className="container col-md-8 offset-md-2"
      >
        {signUpForm()}
        {JSON.stringify(values)}
      </Layout>
    </div>
  );
};

export { Signup };
