import React from "react";
import {BiSearch} from 'react-icons/bi'
function TableTask(props) {
  let filter = props.filter;
  // filter input
  let onChange = (event) => {
    props.onChange(event);
  };

  return (
    <div>
      <div className="row mt-3"></div>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <div className="search-input">
                <input
                  type="text"
                  className="form-control form-search"
                  name="filterName"
                  placeholder="Search"
                  value={filter.filterName}
                  onChange={onChange}
                />
                {/* <div className="icon-search"><BiSearch/></div> */}
              </div>
              
              
              
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filter.filterStatus}
                onChange={onChange}
              >
                <option value={-1}>All</option>
                <option value={0}>False</option>
                <option value={1}>True</option>
              </select>
            </td>
            <td></td>
          </tr>
          {props.showTaskList}
        </tbody>
      </table>
    </div>
  );
}
export default TableTask;
