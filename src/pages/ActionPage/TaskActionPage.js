import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import callAPI from "../../util/apiCaller";
import * as actions from "./../../actions/index";
function TaskActionPage(props) {
  const [item, setitem] = useState({
    id: "",
    name: "",
    status: false,
  });
  useEffect(() => {
    // console.log(props.match);
    if (props.match) {
      let id = props.match.params.id;
      callAPI(`/todos/${id}`, "get", null).then((res) => {
        let data = res.data;
        setitem(data);
      });
    }
  }, []);

  const onAddItem = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    setitem({ ...item, [name]: value });
  };

  let save = (e) => {
    e.preventDefault();
    // console.log(item);
    if (!item.id) {
      //them
      props.onAddTask(item);
    } else {
      //sua
      props.onUpdateTask(item);
    }
    props.history.goBack();
  };

  return (
    <div className="container add-card">
      <div className="card">
        <div className="card-header">
          <h4>{!item.id ? "Thêm công việc" : "Cập nhật công việc"}</h4>
        </div>

        <div className="card-body">
          <form className="form-group" onSubmit={save}>
            <label>Tên công việc</label>
            <input
              type="text"
              className="form-control"
              name="name"
              defaultValue={item.name}
              onChange={onAddItem}
            />
            <br />

            <label>Trạng thái</label>
            <select
              className="form-control"
              name="status"
              value={item.status}
              onChange={onAddItem}
            >
              <option value={false}>Doing</option>
              <option value={true}>Done</option>
            </select>
            <br />
            <button type="submit" className="btn btn-primary ">
              Lưu
            </button>
            <Link to="/" type="button" className="btn btn-danger ml-3">
              Quay lại
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
let mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(actions.addTaskRequest(task));
    },
    onUpdateTask: (task) => {
      dispatch(actions.updateTaskRequest(task));
    },
  };
};
export default connect(null, mapDispatchToProps)(TaskActionPage);
