import { React } from "react";
const TodoTwo = (props) => {
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
      <button className="btn" onClick={() => props.removeAllTodoComplete()}>
        Remove All Todo Complete
      </button>
    </div>
  );
};

export default TodoTwo;
