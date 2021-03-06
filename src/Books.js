import React from "react";

const Books = ({ data = [] }) => {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Books;
