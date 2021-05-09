import React from "react";
function Sort(props) {
  let onSort = (num) => {
    props.onSort(num);
  };
  return (
    <div className="col-6">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          
        >
          {" "}
          Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={() => onSort(1)} href="/#">
            A-Z
          </a>
          <a className="dropdown-item" onClick={() => onSort(-1)} href="/#">
            Z-A
          </a>
        </div>
      </div>
    </div>
  );
}
export default Sort;
