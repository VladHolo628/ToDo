// import "./view.js";

const STATUS = {
  TO_DO: "To Do",
  DONE: "Done",
  IN_PROGRESS: "In Progress",
};
const PRIORITY = {
  LOW: "Low",
  HIGH: "High",
};
const defaultStatus = STATUS.TO_DO;

let list = [];

function Task(task,priority) {
  this.name = task;
  this.status = defaultStatus;
  this.priority = priority;
}

function changeStatus(task, status) {
  let currentTask = list.find((item) => item.name === task);
  if (currentTask) {
    currentTask.status = status;
  } else {
    console.log("Task not found...");
  }
}

function changePriority(task, priority) {
  let currentTask = list.find((item) => item.name === task);
  if (currentTask) {
    currentTask.priority = priority;
  } else {
    console.log("Task not found...");
  }
}


function addTask(task, priority) {
  list.push(new Task(task,priority));
  console.log(list)
}

function deleteTask(task) {
  list = list.filter((item) => item.name !== task);
  return;
}

function showList() {
  let tasks = {
    [STATUS.TO_DO]: "",
    [STATUS.IN_PROGRESS]: "",
    [STATUS.DONE]: "",
  };

  list.forEach((item) => {
    tasks[item.status] += `${item.name} \n`;
  });
  console.log(`${STATUS.TO_DO}: \n  ${tasks[STATUS.TO_DO]}`);
  console.log(`${STATUS.IN_PROGRESS}: \n  ${tasks[STATUS.IN_PROGRESS]}`);
  console.log(`${STATUS.DONE}: \n  ${tasks[STATUS.DONE]}`);
}

function showPriority() {
  let tasks = {
    [PRIORITY.LOW]: "",
    [PRIORITY.HIGH]: "",
  };
  list.forEach((item) => {
    tasks[item.priority] += `${item.name}\n`;
  });
  console.log(`${PRIORITY.LOW}: \n${tasks[PRIORITY.LOW]}`);
  console.log(`${PRIORITY.HIGH}: \n${tasks[PRIORITY.HIGH]}`);
}
function showBy(type) {
  type === "status" ? showList() : showPriority();
}

export { addTask, deleteTask, changeStatus, list, PRIORITY, STATUS };
