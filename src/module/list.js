const toDoListData = [
  {
    description: 'Working Out',
    completed: true,
    index: 0,
  },
  {
    description: 'Cooking',
    completed: false,
    index: 1,
  },
  {
    description: 'Studying',
    completed: true,
    index: 2,
  },
];

const addToList = () => {
  const listContainer = document.getElementById('listContainer');
  for (let i = 0; i < toDoListData.length; i += 1) {
    listContainer.innerHTML += `
      <li class="list-to-do">
        <input type="checkbox" class="to-do">
        ${toDoListData[i].description}
        <i class="fa-solid fa-trash"></i>
      </lis>
      <hr class="line">
    `;
  }
};
export default addToList();