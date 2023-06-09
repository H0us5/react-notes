import React from "react";
import "./search-panel.css";
import { useState } from "react";

const SearchPanel = ({ onUpdateSearch }) => {
  const onSearch = (e) => {
    const value = e.target.value;
    onUpdateSearch(value);
  };
  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="Пошук по нотаткам"
      onChange={onSearch}
    />
  );
};

export default SearchPanel;
