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
const defaultPriority = PRIORITY.LOW;

let list = [
  {
    name: "create a new practice task",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.HIGH,
  },
  {
    name: "make a bed",
    status: STATUS.DONE,
    priority: PRIORITY.LOW,
  },
  {
    name: "make a coffee",
    status: STATUS.DONE,
    priority: PRIORITY.LOW,
  },
  {
    name: "write a post",
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH,
  },
];

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

function addTask(task) {
  list.push({
    name: task,
    status: defaultStatus,
    priority: defaultPriority,
  });
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
changeStatus("make a bed", "To Do");
addTask("have a walk");
addTask("have a breakfast");
// changeStatus("make a bed", STATUS.IN_PROGRESS);
deleteTask("have a walk");
console.log(list);
showBy("status");
