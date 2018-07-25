import React, { Component } from "react";
import "./App.css";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      authors: []
    };
  }

  async getBooks() {
    const url = `${API_HOST}/books`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        books: data
      });
    }
  }

  async getAuthors() {
    const url = `${API_HOST}/authors`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        authors: data
      });
    }
  }

  componentDidMount() {
    this.getBooks();
    this.getAuthors();
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}

        <h1>Authors</h1>
        {this.state.authors.map(author => {
          return <li key={author._id}>{author.name}</li>;
        })}
      </div>
    );
  }
}

export default App;
