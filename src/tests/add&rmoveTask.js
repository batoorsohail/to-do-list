import Task from '../task.js';
import LocalStorage from '../localstorage.js';
import UI from '../UI.js';
// import Status from '../Status.js';

let tasksList = [];
const addTask = (newTask) => {
  let index;
  if (LocalStorage.getData() === null) {
    index = 1;
  } else {
    tasksList = LocalStorage.getData();
    index = tasksList.length + 1;
  }
  const task = new Task(newTask, false, index);
  tasksList.push(task);
  LocalStorage.saveData(tasksList);
//   UI.showAllTasks(tasksList);
};

// const todoList = document.querySelector('.todo-list');
// todoList.innerHTML += `<li class="todo-item">
// <input type="checkbox" name="check" id="check" ${checked}>
// <input type="text" name="task" id="task" value="${task.description}" class="${strike}" required>
// <i class="fa-solid fa-trash-can btn-delete"></i>
// </li>`;

// const removeTask = (target, btn, index) => {
//   const currentLi = target.parentElement;
//   currentLi.parentElement.removeChild(currentLi);

//   let tasksList = LocalStorage.getData();
//   tasksList = tasksList.filter((task, idx) => idx !== index);
//   tasksList = this.updateIndex(tasksList);
//   LocalStorage.saveData(tasksList);
//   this.showAllTasks(tasksList);
// };

export default addTask;
