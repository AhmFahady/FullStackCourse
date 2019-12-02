import React from "react";
import ReactDOM from "react-dom";
import Course from "./components/course";

const App = () => {
  return (
    <React.Fragment>
      <Course />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
