import React from "react";

import "./search-box-styles.css";

export const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
