import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import ApprovalCard from "./ApprovalCard";
import Comment from "./Comment";

class App extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <Comment
            author="Sam"
            timeAgo="Today at 6:00PM"
            content="You are crazy, man!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <Comment
            author="Alex"
            timeAgo="Today at 2:00AM"
            content="Nice blog post!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <Comment
            author="Jane"
            timeAgo="Yesterday at 5:00PM"
            content="Cool!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
