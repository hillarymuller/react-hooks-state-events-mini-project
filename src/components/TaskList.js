import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const taskList = tasks.map(task => (
    <Task category={task.category} 
    text={task.text} 
    key={task.text} 
    onDelete={onDelete} />
  )
    )
  return (
    <div className="tasks">
      <ul>
        {taskList}
      </ul>
    </div>
  );
}

export default TaskList;
