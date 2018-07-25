import React, { Component } from "react";
import "./App.css";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class DataFetcher extends Component {
  state = {
    data: [],
    isLoading: true
  };

  async componentDidMount() {
    const url = `${API_HOST}${this.props.endpoint}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        this.setState({
          data
        });
      }
    } catch (err) {
      console.err(err);
    } finally {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading…</div>;
    }
    return this.props.render(this.state);
  }
}

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
class App extends Component {
  render() {
    return (
      <div>
        <DataFetcher endpoint="/books" render={props => <Books {...props} />} />
        <DataFetcher
          endpoint="/authors"
          render={props => <Authors {...props} />}
        />
      </div>
    );
  }
}

export default App;
