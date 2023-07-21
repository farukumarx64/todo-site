export default function createTaskForm() {
  const formDiv = document.createElement('div');
  formDiv.classList.add('add-task-form', 'container');

  const inputElement = document.createElement('input');
  inputElement.classList.add('task-name');
  inputElement.type = 'text';

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('task-buttons');

  const addButton = document.createElement('button');
  addButton.classList.add('add-form-task-btn');
  addButton.textContent = 'ADD';

  const closeButton = document.createElement('button');
  closeButton.classList.add('close-form-task-btn');
  closeButton.textContent = 'CLOSE';

  buttonsDiv.appendChild(addButton);
  buttonsDiv.appendChild(closeButton);

  formDiv.appendChild(inputElement);
  formDiv.appendChild(buttonsDiv);

  return formDiv;
}
