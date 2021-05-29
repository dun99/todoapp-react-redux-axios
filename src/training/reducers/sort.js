let initialState = {
    sort: {
      by: "name",
      value: 1,
    },
  };
  let myReducer = (state = initialState, action) => {
    if (action.type === "SORT") {
      return {
        sort: {
          by: action.sort.by,
          value: action.sort.value,
        },
      };
    }
    return state;
  }
  
  export default myReducer;