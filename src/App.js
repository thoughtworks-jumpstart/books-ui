import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  async getBooks() {
    const response = await fetch("http://localhost:3000/books");
    if (response.ok) {
      const data = await response.json();
      this.setState({
        books: data
      });
    }
  }

  async componentDidMount() {
    await this.getBooks();
  }

  render() {
    return (
      <div>
        {this.state.books.map(book => {
          return <li key={book._id}>{book.title}</li>;
        })}
      </div>
    );
  }
}

export default App;
