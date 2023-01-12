import React from "react";
import { ReactComponent as AddIcon } from "../assets/logo/add.svg";
import { ReactComponent as DelIcon } from "../assets/logo/delete.svg";

const InputField = ({ addTask, delTasks }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const task = document.querySelector(".task-input").value;
        if (task) addTask(task);
        document.querySelector(".task-input").value = "";
      }}
    >
      <input type="text" placeholder="Add Task..." className="task-input" />
      <button type="submit" className="btn add-btn">
        <AddIcon className="icon" />
      </button>
      <button
        type="button"
        className="btn del-btn"
        onClick={() => {
          delTasks(document.querySelector(".task-input").value);
          document.querySelector(".task-input").value = "";
          document.querySelector(".task-input").focus();
        }}
      >
        <DelIcon className="icon" />
      </button>
    </form>
  );
};

export default InputField;
