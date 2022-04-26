import React from "react";

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.complete}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      {props.todo.title}
      <button onClick={() => props.handleDeleteProps(props.todo.id)}> Delete </button>
    </li>
  );
}

export default TodoItem;
