const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = "To Do";
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  let done = "";
  let toDo = "";
  let inProgress = "";

  for (key in list) {
    switch (list[key]) {
      case "To Do":
        toDo += ` ${key}\n`;
        break;
      case "Done":
        done += ` ${key}\n`;
        break;
      case "In Progress":
        inProgress += ` ${key}\n`;
        break;
    }
  }
  function renderList(list) {
    if (list) {
      switch (list) {
        case toDo:
          console.log("To Do:\n" + toDo);
          break;
        case done:
          console.log("Done:\n" + done);
          break;
        case inProgress:
          console.log("In Progress:\n" + inProgress);
          break;
      }
    }
  }
  renderList(done);
  renderList(inProgress);
  renderList(toDo);
}

changeStatus("make a bed", "To Do");
addTask("have a walk");
addTask("have a breakfast");
changeStatus("have a breakfast", "Done");
deleteTask("have a walk");

showList();
// console.log("jfadhskkfjhkd\ndksjfsldkjaflksdj\n");
