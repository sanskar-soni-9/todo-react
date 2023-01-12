import React, { useState } from "react";
import { ReactComponent as CheckIcon } from "../assets/logo/check.svg";
import { ReactComponent as EditIcon } from "../assets/logo/edit.svg";
import { ReactComponent as DelIcon } from "../assets/logo/delete.svg";

const ListItem = ({ task, index, editTask, delTasks }) => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="list-item">
      <input
        type="text"
        className="item-input"
        id={index}
        value={task}
        onChange={(e) => editable && editTask(e.target.value, index)}
        disabled={!editable}
        onKeyUp={(e) => {
          e.key === "Enter" ? setEditable(false) : setEditable(true);
        }}
      />
      {editable ? (
        <button
          className="btn check-btn"
          onClick={() => {
            document.querySelector(".task-input").focus();
            setEditable(false);
          }}
        >
          <CheckIcon className="icon" />
        </button>
      ) : (
        <button className="btn edit-btn" onClick={() => setEditable(true)}>
          <EditIcon className="icon" />
        </button>
      )}
      <button className="btn del-btn" onClick={() => delTasks(task, index)}>
        <DelIcon className="icon" />
      </button>
    </div>
  );
};

export default ListItem;
