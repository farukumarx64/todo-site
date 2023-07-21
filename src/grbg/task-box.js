export default function createTaskButton(taskName) {
  // Create button element
  const task = document.createElement('button');
  task.classList.add('nav-link', 'd-flex', 'list-tabs', 'btn-brand', 'tasks', `${taskName}-task`);
  task.id = 'task-add';
  task.type = 'button';

  // Create first div
  const firstDiv = document.createElement('div');

  // Create i element inside first div
  const iElement = document.createElement('i');
  iElement.classList.add('ri-checkbox-blank-circle-line');
  firstDiv.appendChild(iElement);

  // Create p element with task-name id inside first div
  const pElement = document.createElement('p');
  pElement.textContent =
          taskName.charAt(0).toUpperCase() +
          taskName.slice(1);
  pElement.id = 'task-name';
  pElement.className = taskName;
  firstDiv.appendChild(pElement);

  // Append first div to task button
  task.appendChild(firstDiv);

  // Create second div
  const secondDiv = document.createElement('div');

  // Create p element inside second div
  const pElement2 = document.createElement('p');
  pElement2.className = 'no-date';
  pElement2.textContent = 'NO DATE';
  secondDiv.appendChild(pElement2);

  // Create input element
  const inputElement = document.createElement('input');
  inputElement.type = 'date';
  inputElement.classList.add('input-due-date', 'active');
  inputElement.setAttribute('data-input-due-date', '');

  // Append input element to task button
  secondDiv.appendChild(inputElement);

  // Create i element with ri-close-line and check classes inside second div
  const iElement2 = document.createElement('i');
  iElement2.classList.add('ri-close-line', 'check', `${taskName}-check`);
  secondDiv.appendChild(iElement2);

  // Append second div to task button
  task.appendChild(secondDiv);

  return task;
}
