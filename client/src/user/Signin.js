import React from "react";
import { Layout } from "../core/Layout";
import { API } from "../config";
const Signin = () => (
  <div>
    <Layout title="Signin" description="Signin to Node React e-commerce App">
      {API}
    </Layout>
  </div>
);

export { Signin };
