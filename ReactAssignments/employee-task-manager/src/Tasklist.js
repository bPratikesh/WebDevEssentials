import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { name: "Stand Up Call", status: "done" },
    { name: "Prepare Monthly Report", status: "not done" },
    { name: "Team Meeting", status: "done" },
  ]);

  const toggleStatus = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: task.status === "done" ? "not done" : "done",
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  return (
    <div>
      <h2>Employee Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.status}{" "}
            <button onClick={() => toggleStatus(index)}>Toggle Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
