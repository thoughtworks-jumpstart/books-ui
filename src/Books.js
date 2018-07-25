import React from "react";

const Books = ({ data = [] }) => {
  return (
    <div>
      <h1>Books</h1>
      {data.map(book => {
        return <li key={book._id}>{book.title}</li>;
      })}
    </div>
  );
};

export default Books;
