import React, { useState, useEffect } from "react";
import { Layout } from "./Layout";
import { getProducts } from "./apiCore";

const Home = () => {
  const [productBySell, setProductBySell] = useState([]);
  const [productByArrival, setProductByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductBySell = () => {
    getProducts("sold").then((data) => {
      // console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setProductBySell(data);
      }
    });
  };
  const loadProductByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductByArrival();
    loadProductBySell();
  });

  return (
    <Layout title="Home Page" description="Node React e-commerce App">
      {JSON.stringify(productByArrival)}
      {JSON.stringify(productBySell)}
    </Layout>
  );
};

export { Home };
