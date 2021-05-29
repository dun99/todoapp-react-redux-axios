import status from "./status";
import sort from "./sort";
import { combineReducers } from "redux";
//combine reduces

const myReducer = combineReducers({
  status,
  sort,
  // status: status,
  // sort: sort,
});
export default myReducer;
