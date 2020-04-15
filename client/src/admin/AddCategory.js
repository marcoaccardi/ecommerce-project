import React, { useState } from "react";
import { Layout } from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
        />
      </div>
      <button className="btn btn-outline-primary">Create category</button>
    </form>
  );

  return (
    <Layout
      title="Add a new category"
      description={`Welcome ${user.name}, ready to add a new category?`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-8 offset-md-2">{newCategoryForm()}</div>
      </div>
    </Layout>
  );
};

export { AddCategory };
