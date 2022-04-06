import {
  list,
  deleteTask,
  addTask,
  changeStatus,
  PRIORITY,
  STATUS,
} from "./main.js";

const createTask = function (text) {
  return ` <div class="todo__item">
          <input class="todo__item-checkbox" type="checkbox" />
          <p class="todo__item-text">${text}</p>
          <button class="todo__item-btn btn" type="button">
            <img
              class="todo__item-icon"
              src="./img/close-icon.svg"
              alt="Remove task"
            />
          </button>
        </div>
    `;
};
const addDeleteing = function () {
  document.querySelectorAll(".todo__item-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      deleteTask(btn.parentElement.textContent.trim());
    });
  });
};

const addCheckbox = function () {
  document.querySelectorAll(".todo__item-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      let currentItem = checkbox.parentElement;
      if (checkbox.checked) {
        currentItem.classList.add("todo__item--done");
        changeStatus(currentItem.textContent.trim(), STATUS.DONE);
      } else {
        currentItem.classList.remove("todo__item--done");
        changeStatus(currentItem.textContent.trim(), STATUS.TO_DO);
      }
    });
  });
};

const HIGH_PRIORITY = {
  CATEGORY: document.querySelector(".todo__category--high"),
  FORM: document.querySelector(".todo__form--high"),
  INPUT: document.querySelector(".todo__form-input--high"),
};

const LOW_PRIORITY = {
  CATEGORY: document.querySelector(".todo__category--low"),
  FORM: document.querySelector(".todo__form--low"),
  INPUT: document.querySelector(".todo__form-input--low"),
};
function renderList() {
  list.forEach((item) => {
  
    if (item.priority === PRIORITY.HIGH) {
      HIGH_PRIORITY.CATEGORY.insertAdjacentHTML(
        "beforeend",
        createTask(item.name)
      );
    }
    LOW_PRIORITY.CATEGORY.insertAdjacentHTML("beforeend", createTask(item.name));
  });
}


HIGH_PRIORITY.FORM.addEventListener("submit", (evt) => {
  const isEmpty =
    HIGH_PRIORITY.INPUT.value === "" ||
    HIGH_PRIORITY.INPUT.value === HIGH_PRIORITY.INPUT.defaultValue;


  evt.preventDefault();
  const isElementPresent = list.some((o) => o.name === HIGH_PRIORITY.INPUT.value);

  if (!isEmpty && !isElementPresent) {
    addTask(HIGH_PRIORITY.INPUT.value, PRIORITY.HIGH);
    HIGH_PRIORITY.CATEGORY.insertAdjacentHTML(
      "beforeend",
      createTask(HIGH_PRIORITY.INPUT.value)
    );
    addDeleteing();
    addCheckbox();
    HIGH_PRIORITY.FORM.reset();
  } else return
});

LOW_PRIORITY.FORM.addEventListener("submit", (evt) => {
  const isEmpty =
    LOW_PRIORITY.INPUT.value === "" ||
    LOW_PRIORITY.INPUT.value === LOW_PRIORITY.INPUT.defaultValue;

  evt.preventDefault();
  const isElementPresent = list.some((o) => o.name === LOW_PRIORITY.INPUT.value);

  if (!isEmpty && !isElementPresent) {
    addTask(LOW_PRIORITY.INPUT.value, PRIORITY.LOW);
    LOW_PRIORITY.CATEGORY.insertAdjacentHTML(
      "beforeend",
      createTask(LOW_PRIORITY.INPUT.value)
    );
    addDeleteing();
    addCheckbox();
    LOW_PRIORITY.FORM.reset();
  } else return
});
