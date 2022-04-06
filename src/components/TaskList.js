import React from "react";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((el) => (
        <li>{el.text}</li>
      ))}
    </div>
  );
}

export default TaskList;
