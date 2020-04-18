import React, { useState, useEffect } from "react";
import { Layout } from "./Layout";
import { Card } from "./Card";
import { getCategories } from "./apiCore";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout title="Shop" description="Search and find book of your choice">
      <div className="row">
        <div className="col-4">left sidebar</div>
        {JSON.stringify(categories)}
        <div className="col-8">right sidebar</div>
      </div>
    </Layout>
  );
};

export { Shop };
