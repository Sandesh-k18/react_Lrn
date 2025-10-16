import React, { useState } from "react";
import "./toDoList.css";
function ToDoList() {
  const [list, setList] = useState(["Eat", "Code", "Sleep"]);
  const [newTask, setNewTask] = useState("tsk");
  // const [pos, setPos] = useState();

  function hndleInputChngeTsk(event) {
    setNewTask(event.target.value);
  }
  function ddList() {
    // const newTaskInput = document.getElementById("input-btn").value;
    // if (newTaskInput.trim() !== "") {
    //   setList((l) => [...l, newTaskInput]);
    // }
    // document.getElementById("input-btn").value = "";
    if (newTask.trim() !== "") {
      setList((l) => [...l, newTask]);
      setNewTask(""); // reset properly
    }
  }
  function removeTsk(index) {
    const updtedList = list.filter((_, i) => i !== index);
    setList(updtedList);
  }
  function moveUplist(index) {
    if (index > 0) {
      const updtedList = [...list];
      [updtedList[index], updtedList[index - 1]] = [
        updtedList[index - 1],
        updtedList[index],
      ];
      setList(updtedList);
    }
  }
  function moveDownlist(index) {
    if (index < list.length - 1) {
      const updtedList = [...list];
      [updtedList[index], updtedList[index + 1]] = [
        updtedList[index + 1],
        updtedList[index],
      ];
      setList(updtedList);
    }
  }
  return (
    <>
      <div className="to-do-list-div">
        <h1>To Do List</h1>
        <input
          type="text"
          className="input-btn"
          id="input-btn"
          value={newTask}
          onChange={hndleInputChngeTsk}
        />
        <button itemID="add-task-btn" onClick={ddList}>
          Add task
        </button>
        <ol>
          {list.map((task, index) => (
            <li key={index}>
              <span className="text-list">{task}</span>
              <button
                className="list-task-btn"
                onClick={() => moveUplist(index)}
              >
                👆
              </button>
              <button
                className="list-task-btn"
                onClick={() => moveDownlist(index)}
              >
                👇
              </button>
              <button
                className="list-task-btn"
                onClick={() => removeTsk(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default ToDoList;
