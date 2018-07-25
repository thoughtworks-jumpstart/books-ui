import React, { Component } from "react";
import "./App.css";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
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

  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
      </div>
    );
  }
}

class Authors extends Component {
  state = {
    authors: []
  };

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
    this.getAuthors();
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        {this.state.authors.map(author => {
          return <li key={author._id}>{author.name}</li>;
        })}
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <Authors />
      </div>
    );
  }
}

export default App;
