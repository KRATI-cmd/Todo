document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
  
    addButton.addEventListener('click', function () {
      const todoText = todoInput.value.trim();
  
      if (todoText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${todoText}</span>
          <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(listItem);
        todoInput.value = '';
  
        const deleteButton = listItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function () {
          listItem.remove();
        });
      } else {
        alert('Please enter a todo!');
      }
    });
  });
  