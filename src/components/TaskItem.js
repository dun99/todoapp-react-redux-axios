import React from "react";
import { Link } from "react-router-dom";
function TaskItem(props) {
  let onDeleteItem = (id) => {
    if (confirm("Bạn có chắc chắn muốn xóa? ")) {
      props.onDelete(id);
    }
  };

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.task.name}</td>
      <td className="text-center">
        <span
          className={
            props.task.status === true ? "badge badge-secondary badge-warning p-3" : "badge  badge-secondary badge-success p-3"
          }
        >
          {props.task.status === true ? "Done" : "Doing"}
        </span>
      </td>
      <td>
        <Link
          to={`/task/${props.task.id}/edit`}
          type="submit"
          className="btn btn-primary"
        >
          Sửa
        </Link>
        <button
          type="button"
          className="btn btn-danger ml-3"
          onClick={() => onDeleteItem(props.task.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
}
export default TaskItem;
