import React from "react";

const API_HOST = process.env.REACT_APP_BOOKS_API || "http://localhost:3000";

class DataFetcher extends React.Component {
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

export default DataFetcher;
