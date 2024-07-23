document.addEventListener("DOMContentLoaded", () => {
  // getting reference to the form and task list 
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');


//reference to the form and task list
form.addEventListener('submit' ,(e) => {
  //prevent the default form submission behaviour
  e.preventDefault();

  //Get the task description from the input field
  const taskDescription = document.getElementById('new-task-description').value;

  //check if the task description is not empty
  if (taskDescription.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    taskList.appendChild(taskItem);

    form.reset();
  }
});
});

