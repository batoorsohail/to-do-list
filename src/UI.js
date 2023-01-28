import LocalStorage from './localstorage.js';

export default class UI {
  static updateIndex(tasksList) {
    for (let i = 0; i < tasksList.length; i += 1) {
      tasksList[i].index = i + 1;
    }
    return tasksList;
  }

  static removeTask(target, btn, index) {
    const currentLi = target.parentElement;
    currentLi.parentElement.removeChild(currentLi);

    let tasksList = LocalStorage.getData();
    tasksList = tasksList.filter((task, idx) => idx !== index);
    tasksList = this.updateIndex(tasksList);
    LocalStorage.saveData(tasksList);
    this.showAllTasks(tasksList);
  }

  static editTask(value, index, tasksList) {
    tasksList[index].description = value;
    LocalStorage.saveData(tasksList);
    this.showAllTasks(tasksList);
  }

  static reloadPage() {
    const tasksList = LocalStorage.getData();
    tasksList.forEach((task) => {
      task.completed = false;
    });
    LocalStorage.saveData(tasksList);
  }

  static showAllTasks(tasksList) {
    const todoList = document.querySelector('.todo-list');
    let tasks = '';

    tasksList.forEach((task) => {
      tasks += `<li class="todo-item">
      <input type="checkbox" name="check" id="check">
      <input type="text" name="task" id="task" value="${task.description}"" reuired>
      <i class="fa-solid fa-trash-can btn-delete"></i>
      </li>`;
    });

    todoList.innerHTML = tasks;

    const deleteBtn = document.querySelectorAll('.btn-delete');
    deleteBtn.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        this.removeTask(e.target, btn, index);
      });
    });
  }
}