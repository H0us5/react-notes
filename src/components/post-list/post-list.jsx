import React from "react";
import "./post-list.css";

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((post) => {
    const { id, ...itemProps } = post;
    return (
      <li className="list-group-item" key={id}>
        <PostListItem
          {...itemProps}
          onDelete={() => {
            onDelete(id);
          }}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
