import React from "react";
import ReactDOM from "react-dom";

import Comment from "./Comment";

class App extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
