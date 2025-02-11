import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Atlikta" : "Pažymėti kaip atliktą"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Ištrinti</button>
    </div>
  );
};

export default TaskItem;
