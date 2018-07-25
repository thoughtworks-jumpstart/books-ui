import React from "react";
import DataFetcher from "./DataFetcher";
import Books from "./Books";
import Authors from "./Authors";
import "./App.css";

const App = () => {
  return (
    <div>
      <DataFetcher endpoint="/books" render={props => <Books {...props} />} />
      <DataFetcher
        endpoint="/authors"
        render={props => <Authors {...props} />}
      />
    </div>
  );
};

export default App;
