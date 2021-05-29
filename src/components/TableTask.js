import React from "react";
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
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
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
                  placeholder="Tìm kiếm"
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
                <option value={-1}>Tất cả</option>
                <option value={0}>Doing</option>
                <option value={1}>Done</option>
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
