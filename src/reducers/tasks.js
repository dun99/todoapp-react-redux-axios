import * as types from "../constants/ActionTypes";

let initialState = [];

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS:
      state = action.tasks;
      return [...state];
    case types.ADD_TASK:
      // console.log(action.task);
      state.push(action.task);
      return [...state];

    case types.UPDATE_TASK:
      // console.log("update");
      // console.log(action.task);
      let newTasks = [...state];
      newTasks.map((task, index) => {
        if (task.id === action.task.id) {
          newTasks[index] = action.task;
        }
      });
      return newTasks;
    case types.DELETE_TASK:
      let idDel = action.id;
      // console.log(idDel);
      let TasksNew = [...state].filter((task) => task.id !== idDel);
      state = [...TasksNew];
      return [...state];
    default:
      return state;
  }
  return state;
};
export default myReducer;
