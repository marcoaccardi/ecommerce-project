import React, { useState } from "react";
import { Layout } from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct } from "./apiAdmin";

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  return (
    <Layout
      title="Add a new product"
      description={`Welcome ${user.name}, ready to add a new product?`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-8 offset-md-2">...</div>
      </div>
    </Layout>
  );
};

export { AddProduct };
