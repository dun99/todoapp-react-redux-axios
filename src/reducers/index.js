import { combineReducers } from "redux";
import tasks from "./tasks";
import taskEditing from "./taskEditing"
const myReducers = combineReducers({
  tasks, // tasks : tasks
  taskEditing,
});
export default myReducers;
