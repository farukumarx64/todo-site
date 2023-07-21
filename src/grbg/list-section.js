function createProjectSection(projectName) {
    // Create the outer div element
    const divElement = document.createElement('div');
    divElement.classList.add('tab-pane', 'fade');
    divElement.id = `v-pills-${projectName.toLowerCase()}`;
    divElement.setAttribute('role', 'tabpanel');
    divElement.setAttribute('aria-labelledby', `v-pills-${projectName.toLowerCase()}-tab`);
    divElement.setAttribute('tabindex', '0');
  
    // Create the h1 element and set its style attribute
    const h1Element = document.createElement('h1');
    h1Element.style.paddingLeft = '10px';
    h1Element.textContent = projectName.charAt(0).toUpperCase() + projectName.slice(1);;
  
    // Create the tasks-list div element
    const tasksListDiv = document.createElement('div');
    tasksListDiv.id = 'personal-tasks-list';
  
    // Create the button element
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('nav-link', 'd-flex', 'list-tabs', 'btn-brand', 'task-creator', `${projectName.toLowerCase()}-task-btn`);
    buttonElement.id = 'task-add';
    buttonElement.type = 'button';
  
    // Create the i element for the icon
    const iElement = document.createElement('i');
    iElement.classList.add('ri-add-box-fill');
  
    // Create the p element for the text
    const pElement = document.createElement('p');
    pElement.textContent = 'Add Task';
  
    // Append the i and p elements to the button element
    buttonElement.appendChild(iElement);
    buttonElement.appendChild(pElement);
  
    // Append the button element to the tasks-list div
    tasksListDiv.appendChild(buttonElement);
  
    // Append the h1 and tasks-list div elements to the outer div
    divElement.appendChild(h1Element);
    divElement.appendChild(tasksListDiv);
  
    return divElement;
  }
  
  export default createProjectSection;
  