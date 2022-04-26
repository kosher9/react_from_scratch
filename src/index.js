import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/ToDoContainer";

const element = <h1>Hello from create react app from scratch</h1>;

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
