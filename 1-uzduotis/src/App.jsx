import React from "react";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Užduočių sąrašas</h1>
      <TaskList />
    </div>
  );
};

export default App;
