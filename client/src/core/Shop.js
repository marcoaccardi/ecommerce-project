import React, { useState, useEffect } from "react";
import { Layout } from "./Layout";
import { Card } from "./Card";

const Shop = () => {
  return (
    <Layout title="Shop" description="Search and find book of your choice">
      <div className="row">
        <div className="col-4">left sidebar</div>
        <div className="col-8">right sidebar</div>
      </div>
    </Layout>
  );
};

export { Shop };
