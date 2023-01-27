/* eslint-disable no-restricted-syntax */
const toDoListData = [
  {
    description: 'Working Out',
    completed: false,
    index: 0,
  },
  {
    description: 'Cooking',
    completed: false,
    index: 2,
  },
  {
    description: 'Studying',
    completed: false,
    index: 1,
  },
];

const addToList = () => {
  const listContainer = document.getElementById('listContainer');
  for (const item of toDoListData) {
    listContainer.innerHTML += `
      <li class="list-to-do">
        <input type="checkbox" class="to-do">
        ${item.description}
        <i class="fa-solid fa-trash"></i>
      </li>
      <hr class="line">
    `;
  }
};
export default addToList;