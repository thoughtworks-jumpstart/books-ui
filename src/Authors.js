import React from "react";

const Authors = ({ data = [] }) => {
  return (
    <div>
      <h1>Authors</h1>
      {data.map(author => {
        return <li key={author._id}>{author.name}</li>;
      })}
    </div>
  );
};

export default Authors;
