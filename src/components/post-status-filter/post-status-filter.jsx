import React from "react";
import "./post-status-filter.css";

const PostStatusFilter = ({ filter, onFilterSelect }) => {
  const buttons = [
    { name: "all", label: "Всі" },
    { name: "like", label: "Сподобалися" },
  ];
  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => {
        const active = filter === name;
        const type = active ? "btn-info" : "btn-outline-secondary";
        return (
          <button
            key={name}
            type="button"
            className={`btn ${type}`}
            onClick={() => onFilterSelect(name)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default PostStatusFilter;
