import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TableTask from "./components/TableTask";
import { v4 as uuidv4 } from "uuid";

function App() {
  // khoi tao state tasks ban dau rong
  const [tasks, settasks] = useState([]);

  // dong mo form add
  const [displayFormAdd, setdisplayFormAdd] = useState(false);

  //state edit
  const [taskEditing, settaskEditing] = useState(null);


  //lay tu local store 1 lan khi app render
  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      settasks(tasks);
    }
  }, []);

  //ghi vao local staorage moi khi tasks thay doi
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // dong form add
  function onClose() {
    setdisplayFormAdd(false);
  }
  // hien thi form add
  function onOpen() {
    setdisplayFormAdd(true);
  }

  // them moi cong viec
  let onSubmit = (data) => {
    data.status = data.status === "true" ? true : false;
    //them moi
    if (!data.id) {
      data.id = uuidv4();
      settasks([...tasks, data]);
    } else {
      // sua
      let newTasks = tasks.map((task, index) => {
        if (task.id === data.id) {
          tasks[index] = data;
        }
        return tasks[index];
      });
      settasks(newTasks);
    }
  };

  //dong mo form add
  function handleDisplay() {
    if (displayFormAdd && taskEditing !== null) {
      setdisplayFormAdd(true);
      settaskEditing(null);
    } else {
      setdisplayFormAdd(!displayFormAdd);
      settaskEditing(null);
    }
  }

  //update trang thai cong viec
  let onUpdateStatus = (id) => {
    let newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    settasks(newTasks);
  };

  //xoa cong viec
  let onDeleteItem = (id) => {
    let delTasks = tasks.filter((task) => task.id !== id);
    settasks(delTasks);
    onClose();
  };

  //cap nhat cong viec
  let onUpdateItem = (id) => {
    tasks.map((task, index) => {
      if (task.id === id) {
        // let res = index;
        let taskEditingTmp = tasks[index];
        settaskEditing(taskEditingTmp);
      }
      return taskEditing;
    });
    onOpen();
  };

  let eleDisplayAdd = displayFormAdd ? (
    <AddTask onClose={onClose} onSubmit={onSubmit} taskEditing={taskEditing} />
  ) : (
    ""
  );

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5 mb-3 text-uppercase font-weight-bold">
          Todo app
        </h1>

        <div className="row  text-left">
          <div className={displayFormAdd ? "col-4" : ""}>{eleDisplayAdd}</div>

          <div className={displayFormAdd ? "col-8" : "col-12"}>
            <div className="card">
              <div className="card-header"> Add </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleDisplay()}
                >
                  Add
                </button>

                <br />

                <TableTask
                  tasks={tasks}
                  onUpdateStatus={onUpdateStatus}
                  onDeleteItem={onDeleteItem}
                  onUpdateItem={onUpdateItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
