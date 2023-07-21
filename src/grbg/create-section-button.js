export default function createSectionButton(projectName) {
    // Create the button element
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('nav-link', 'd-flex', 'list-tabs', 'btn-brand', 'projects-button');
    buttonElement.id = `v-pills-${projectName.toLowerCase()}-tab`;
    buttonElement.setAttribute('data-bs-toggle', 'pill');
    buttonElement.setAttribute('data-bs-target', `#v-pills-${projectName.toLowerCase()}`);
    buttonElement.type = 'button';
    buttonElement.setAttribute('role', 'tab');
    buttonElement.setAttribute('aria-controls', `v-pills-${projectName.toLowerCase()}`);
    buttonElement.setAttribute('aria-selected', 'false');
    buttonElement.setAttribute('tabindex', '-1');
  
    // Create the div element to wrap the first i and p elements
    const divElement = document.createElement('div');
  
    // Create the i element for the icon
    const iElement = document.createElement('i');
    iElement.classList.add('ri-list-check-3');
  
    // Create the p element for the text
    const pElement = document.createElement('p');
    pElement.textContent = projectName.charAt(0).toUpperCase() + projectName.slice(1);
  
    // Append the i and p elements to the div element
    divElement.appendChild(iElement);
    divElement.appendChild(pElement);
  
    // Create the additional i element
    const additionalIElement = document.createElement('i');
    additionalIElement.classList.add('ri-close-line', 'check');
  
    // Append the div and additional i elements to the button element
    buttonElement.appendChild(divElement);
    buttonElement.appendChild(additionalIElement);
  
    return buttonElement;
  }
  