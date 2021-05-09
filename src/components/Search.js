import React, { useState } from "react";
function Search(props) {
  const [search, setsearch] = useState({
    keyword: "",
  });
  let onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    setsearch({ ...search, [name]: value });
  };
  let onSearch = () =>{
      props.onSearch(search.keyword);
  }
  return (
    <div className="col-6 ">
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          name="keyword"
          value={search.keyword}
          onChange={onChange}
          placeholder="search"
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary" onClick={onSearch}>
            Search
          </button>
        </span>
      </div>
    </div>
  );
}
export default Search;
