import { React } from "react";

const TodoButtons = (props) => {
  return (
    <div className="box-btn">
      <div>
        <button className="btn" onClick={() => props.updateToShow("all")}>
          All
        </button>
        <button className="btn" onClick={() => props.updateToShow("active")}>
          Active
        </button>
        <button className="btn" onClick={() => props.updateToShow("complete")}>
          Complete
        </button>
      </div>
      <button className={props.toShow === "all" ? "btn" : "btn-h"} onClick={() => props.removeAllTodoComplete()}>
        Remove All Todo Complete
      </button>
    </div>
  );
};

export default TodoButtons;
