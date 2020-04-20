import React, { useState, useEffect, Fragment } from "react";
import prices from "./fixedPrices";

const RadioBox = ({ prices }) => {
  const [value, setValue] = useState(0);
  const handleChange = () => {};
  return prices.map((price, index) => (
    <div key={index}>
      <input
        onChange={handleChange}
        value={`${price._id}`}
        type="radio"
        className="mr-2 ml-4"
      />
      <label className="form-check-label">{price.name}</label>
    </div>
  ));
};
export { RadioBox };
