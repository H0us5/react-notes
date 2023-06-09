import React from "react";
import "./app-header.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Bohdan Dovhal</h1>
      <h2>
        {allPosts} нотаток, з них сподобалося {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
