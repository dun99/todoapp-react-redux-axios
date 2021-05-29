
import { connect } from "react-redux";
import TableTask from "../../components/TableTask";
import TaskItem from "../../components/TaskItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as actions from "../../actions/index";
function HomePage(props) {
  let tasks = props.tasks;
  // console.log(tasks);
  //filter
  const [filter, setfilter] = useState({
    filterName: "",
    filterStatus: -1,
  });

  //fetch task tu server
  useEffect(() => {
    props.fetchTasksRequest();
  }, []);
  //xoa task
  let onDelete = (id) => {
    props.deleteTaskRequest(id)
  };

  let showTaskList = (tasks) => {
    if (tasks.length > 0) {
      let result = tasks.map((task, index) => {
        return (
          <TaskItem key={index} index={index} task={task} onDelete={onDelete} />
        );
      });
      return result;
    }
  };

  let onChange = (event) => {
    console.log(event);
    let target = event.target;
    let name = target.name;
    let value = target.value;
    setfilter({ ...filter, [name]: value });
    
  };
  //neu filter theo name
  if (filter.filterName) {
    tasks = tasks.filter((task) => {
      return (
        task.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1
      );
    });
    // console.log(tasks);
  }
 // neu filter theo status
  if (filter.filterStatus) {
    tasks = tasks.filter((task) => {
      if (filter.filterStatus === "-1" || filter.filterStatus === -1) {
        return task;
      } else {
        return (
          task.status === (parseInt(filter.filterStatus) === 1 ? true : false)
        );
      }
    });
  }
  
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3 text-uppercase font-weight-bold">
        Todo app
      </h1>
      <div className="row  text-left">
        <div className="col-12">
          <div className="card">
            <div className="card-header font-weight-bold"> Todo List </div>
            <div className="card-body">
              <Link to="/task/add" type="button" className="btn btn-primary">
                Add
              </Link>

              <br />
              <TableTask showTaskList={showTaskList(tasks)} tasks={tasks} filter={filter} onChange={onChange}></TableTask>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
let mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    fetchTasksRequest: () => {
      dispatch(actions.fetchTasksRequest());
    },
    deleteTaskRequest: (id) => {
      dispatch(actions.deleteTaskRequest(id));
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
