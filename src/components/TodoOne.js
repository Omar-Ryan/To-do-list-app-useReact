import { React, useEffect, useState } from "react";
import TodoButtons from "./TodoButtons";
import "../App.css";

const TodoOne = () => {
  const [text, setText] = useState("");
  let [list, setList] = useState(
    localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
  );
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
    if (toShow === "all") {
      setList(
        list.map((ele) =>
          ele.id === id ? { ...ele, complete: !ele.complete } : ele
        )
      );
    } else {
      updateToShow("all");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    updateToShow("all");
  };

  const handleDelete = (id) => {
    const items = list.filter((ele) => ele.id !== id);
    setList([...items]);
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
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("list"));
    if (list) {
      setList(list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
            <button
              className={
                toShow === "all" ? "" : "btn-h"
              }
              onClick={() => handleDelete(ele.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <TodoButtons
        updateToShow={updateToShow}
        removeAllTodoComplete={removeAllTodoComplete}
        toShow={toShow}
      />
    </>
  );
};

export default TodoOne;
