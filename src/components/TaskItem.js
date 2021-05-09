import React from "react";
function TaskItem(props) {
  var task = props.task;
  var index = props.index;
  //  update trang thai
  function onUpdateStatus() {
    props.onUpdateStatus(props.task.id);
  }
  // xoa cong viec
  function onDeleteItem() {
    props.onDeleteItem(props.task.id);
  }
  //cap nhat cong viec
  let onUpdateItem = () => {
    props.onUpdateItem(props.task.id);
  };
  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td>
        <span
          className={
            task.status === true ? "btn btn-warning" : "btn btn-success"
          }
          onClick={() => onUpdateStatus()}
        >
          {task.status === true ? "True" : "False"}
        </span>
      </td>
      <td>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onUpdateItem}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger ml-3"
          onClick={() => onDeleteItem()}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default TaskItem;
