import React, { useState } from "react";
import Search from "./Search";
import TaskItem from "./TaskItem";
import Sort from "./Sort";
function TableTask(props) {
  let tasks = props.tasks;
  //state filter
  const [filter, setfilter] = useState({
    filterName: "",
    filterStatus: -1,
  });

  //search
  const [search, setsearch] = useState({
    keyword: "",
  });
  const [sort, setsort] = useState({
    sortBy: 0,
  });

  // filter input
  let onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    setfilter({ ...filter, [name]: value });
  };
  let onSearch = (keyword) => {
    console.log(keyword);
    setsearch({
      keyword: keyword,
    });
  };
  //search
  if (search.keyword) {
    tasks = tasks.filter((task) => {
      return (
        task.name.toLowerCase().indexOf(search.keyword.toLowerCase()) !== -1
      );
    });
  }
  //neu filter theo name
  if (filter.filterName) {
    tasks = tasks.filter((task) => {
      return (
        task.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1
      );
    });
    // console.log(tasks);
  }
  //neu filter theo status
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
  function compare(a, b) {
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  //sort a-z
  let onSort = async(num) => {
      
    // tasks = tasks.sort(compare)
    // console.log(tasks);
    await setsort({
      sortBy: num,
    });
  };
  if (sort.sortBy === 1) {
    tasks.sort((a, b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else return 0;
    });
  }else if(sort.sortBy===-1){
    tasks.sort((a, b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        else if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        else return 0;
    });
  }

  let eleTasks = tasks.map((task, index) => {
    return (
      <TaskItem
        key={task.id}
        index={index}
        task={task}
        onUpdateStatus={props.onUpdateStatus}
        onDeleteItem={props.onDeleteItem}
        onUpdateItem={props.onUpdateItem}
      />
    );
  });

  return (
    <div>
      <div className="row mt-3">
        <Search onSearch={onSearch} />
        <Sort onSort={onSort} />
      </div>
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
              <input
                type="text"
                className="form-control"
                name="filterName"
                placeholder="Filter"
                value={filter.filterName}
                onChange={onChange}
              />
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
          {eleTasks}
        </tbody>
      </table>
    </div>
  );
}
export default TableTask;
