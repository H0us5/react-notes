import React, { useState } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";

const App = () => {
  const [data, setData] = useState([
    { label: "Props", important: true, like: false, id: 1 },
    { label: "Trying", important: false, like: false, id: 2 },
    { label: "To see", important: false, like: false, id: 3 },
  ]);

  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((data) => data.id !== id));
  };
  const addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: crypto.randomUUID(),
    };
    setData((prevData) => [...prevData, newItem]);
  };

  const onToggleImportant = (id) => {
    setData((prevData) => {
      const index = prevData.findIndex((data) => data.id === id);
      const old = prevData[index];
      const newItem = { ...old, important: !old.important };
      const newArray = [
        ...prevData.slice(0, index),
        newItem,
        ...prevData.slice(index + 1),
      ];
      return newArray;
    });
  };

  const onToggleLiked = (id) => {
    setData((prevData) => {
      const index = prevData.findIndex((data) => data.id === id);
      const old = prevData[index];
      const newItem = { ...old, like: !old.like };
      const newArray = [
        ...prevData.slice(0, index),
        newItem,
        ...prevData.slice(index + 1),
      ];
      return newArray;
    });
  };

  const searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) =>
      item.label.toLowerCase().includes(term.toLowerCase())
    );
  };

  const filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const liked = data.filter((item) => item.like).length;
  const allPosts = data.length;

  const visiblePosts = filterPost(searchPost(data, term), filter);

  return (
    <div className="app">
      <AppHeader liked={liked} allPosts={allPosts} />
      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        posts={visiblePosts}
        onDelete={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleLiked={onToggleLiked}
      />
      <PostAddForm onAdd={addItem} />
    </div>
  );
};
export default App;
