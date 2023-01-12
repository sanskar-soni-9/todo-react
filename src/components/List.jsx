import React from "react";
import ListItem from "./ListItem";

const List = ({ tasks, editTask, delTasks }) => {
  return (
    <section className="list-container">
      {tasks &&
        tasks.map((task, index) => (
          <ListItem
            key={index}
            task={task}
            editTask={editTask}
            index={index}
            delTasks={delTasks}
          />
        ))}
    </section>
  );
};

export default List;
