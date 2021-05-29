import { createStore } from "redux";
import { status, sort } from "./actions/index";
import myReducer  from "./reducers/index";

const store = createStore(myReducer);

//thuc hien action thay doi status
console.log("Default: ", store.getState());
store.dispatch(status());
console.log("TOGGLE_STATUS: ", store.getState());

//thuc hien action sap xep Z-A
store.dispatch(
  sort({
    by: "name",
    value: -1,
  })
);
console.log("SORT", store.getState());
