import React from "react";
import { Layout } from "../core/Layout";
import { API } from "../config";

const Signup = () => (
  <div>
    <Layout title="Signup" description="Signup to Node React e-commerce App">
      {API}
    </Layout>
  </div>
);

export { Signup };
