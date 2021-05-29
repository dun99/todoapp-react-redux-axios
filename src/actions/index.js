import * as types from "../constants/ActionTypes";
import callApi from "./../util/apiCaller";
// fetch data
export const fetchTasks = (tasks) => {
  return {
    type: types.FETCH_TASKS,
    tasks,
  };
};
export const fetchTasksRequest = () => {
  return async (dispatch) => {
    await callApi("todos", "get", null).then((res) => {
      dispatch(fetchTasks(res.data));
    });
  };
};

// them cong viec
export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task,
  };
};

export const addTaskRequest = (task) => {
  // console.log(task);
  return async (dispatch) => {
    await callApi("todos", "post", {
      name: task.name,
      status: task.status === "true" ? true : false,
    }).then((res) => {
      dispatch(addTask(res.data));
    });
  };
};

//edit
export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task,
  };
};
export const updateTaskRequest = (task) => {
  // console.log(task);
  return async (dispatch) => {
    await callApi(`todos/${task.id}`, "put", {
      name: task.name,
      status: (task.status === "true" || task.status === true) ? true : false,
    }).then((res) => {
      // console.log(res.data);
      dispatch(updateTask(res.data));
    });
  };
};

//xoa
export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id,
  };
};
export const deleteTaskRequest = (id) => {
  return async (dispatch) => {
    await callApi(`todos/${id}`, "delete", null).then((res) => {
      dispatch(deleteTask(id));
    });
  };
};
