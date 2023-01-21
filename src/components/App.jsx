import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import List from "./List";

const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")?.split("-||-") || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", tasks.join("-||-"));
  }, [tasks]);
  function addTask(task) {
    setTasks([...tasks, task]);
  }
  function delTasks(value, index = -1) {
    setTasks(tasks.filter((task, i) => task !== value && index !== i));
  }
  function editTask(value, index) {
    setTasks(tasks.map((task, i) => (i === index ? value : task)));
  }
  return (
    <>
      <Header />
      <InputField addTask={addTask} delTasks={delTasks} />
      <List tasks={tasks} editTask={editTask} delTasks={delTasks} />
    </>
  );
};

export default App;
