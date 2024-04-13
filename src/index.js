document.addEventListener("DOMContentLoaded", () => {
  // your code here

    const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('tasks');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskInput = document.getElementById('new-task-description');
      const taskDescription = taskInput.value.trim();
  
      if (taskDescription !== '') {
        addTask(taskDescription);
        taskInput.value = '';
      }
    });
  
    function addTask(description) {
      const taskItem = createTaskItem(description);
      taskList.appendChild(taskItem);
    }
  
    function createTaskItem(description) {
      const li = document.createElement('li');
      li.textContent = description;
      return li;
    }
  });
