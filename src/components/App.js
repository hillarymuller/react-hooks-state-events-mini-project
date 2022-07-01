import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDelete(taskDeleted){
    const newTaskList = tasks.filter(task => task.text !== taskDeleted);
    return setTasks(newTaskList);
  }
  function onSelectedCategory(selectedCategory){
    return setSelectedCategory(selectedCategory)
  }
  const filteredTasks = tasks.filter((task) => task.category === selectedCategory || selectedCategory === "All")
  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectedCategory={onSelectedCategory} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} addNewTask={addNewTask} />
      <TaskList tasks={filteredTasks} onDelete={onDelete} />
    </div>
  );
}

export default App;
