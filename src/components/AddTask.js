import React, { useState, useEffect } from "react";

function AddTask(props) {
  const [item, setitem] = useState({});

  // moi khi nhan props taskediting thi cap nhat form sua
  useEffect(() => {
    if (props.taskEditing && props.taskEditing.id !== null) {
      let newItem = {
        id: props.taskEditing.id,
        name: props.taskEditing.name,
        status: props.taskEditing.status,
      };
      setitem(newItem);
    }else if(!props.taskEditing){
      // console.log('them');
      setitem({
        id:'',
        name:'',
        status:false
      })

    }
  }, [props.taskEditing]);
  // useEffect(() => {
  //   if (props.taskEditing) {
  //     let newItem = {
  //       id: props.taskEditing.id,
  //       name: props.taskEditing.name,
  //       status: props.taskEditing.status,
  //     };
  //     setitem(newItem);
  //   }
  //   console.log(item);
  // }, []);
  function handleClose() {
    props.onClose();
  }

  const onAddItem = (event) => {
    let target = event.target;
    let name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    setitem({...item, [name]:value});
    
  };
  let onClear = () => {
    setitem({
      id: "",
      name: "",
      status: false,
    });
  };
  let save = (e) => {
    e.preventDefault();
    props.onSubmit(item);
    handleClose();
    onClear();
    console.log(item);
  };
  let { id } = item;

  return (
    <div className="card">
      <div className="card-header">
        <h4>
          {!id ? "Add" : "Update"}
          <span
            className="fas fa-times-circle text-right float-right"
            onClick={() => handleClose()}
          ></span>
        </h4>
      </div>

      <div className="card-body">
        <form className="form-group" onSubmit={save}>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            defaultValue={item.name || ""}
            onChange={onAddItem}
          />
          <br />

          <label>Status</label>
          <select
            className="form-control"
            name="status"      
            value={item.status }
            onChange={onAddItem}
            
          >
              <option value={false}>False</option>
            <option value={true}>True</option>
          
          </select>
          <br />
          <br />
          <button type="submit" className="btn btn-primary ">
            Save
          </button>
          <button
            type="button"
            className="btn btn-danger ml-3"
            onClick={onClear}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
