import { React, useState } from "react";
import TodoTwo from "./TodoTwo";
import "../App.css";
const TodoOne = () => {
  const [text, setText] = useState("");
  let [list, setList] = useState([]);
  const [toShow, setToShow] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
      ...list,
    ]);
    setText("");
  };

  const handleComplete = (id) => {
    setList(
      list.map((ele) =>
        ele.id === id ? { ...ele, complete: !ele.complete } : ele
      )
    );
  };
  const handleChange = (e) => {
    setText(e.target.value);
    updateToShow("all");
  };
  const handleDelete = (id) => {
    setList(list.filter((ele) => ele.id !== id));
  };
  const updateToShow = (ele) => {
    setToShow(ele);
  };
  if (toShow === "active") {
    list = list.filter((ele) => !ele.complete);
  } else if (toShow === "complete") {
    list = list.filter((ele) => ele.complete);
  }
  const removeAllTodoComplete = () => {
    setList(list.filter((ele) => !ele.complete));
    updateToShow("all");
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={handleChange} value={text} />
        <button className="add" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <div className="tasks">
        {list.map((ele) => (
          <div className="box-task" key={ele.id}>
            <div
              onClick={() => handleComplete(ele.id)}
              className={ele.complete ? "task done" : "task"}
            >
              {ele.text}
            </div>
            <button onClick={() => handleDelete(ele.id)}>X</button>
          </div>
        ))}
      </div>
      <TodoTwo
        updateToShow={updateToShow}
        removeAllTodoComplete={removeAllTodoComplete}
      />
    </>
  );
};

export default TodoOne;
