function createTab(tabName) {

  if (tabName === 'inbox') {
    const tabPane = document.createElement('div');
    tabPane.classList.add('tab-pane', 'fade', 'show', 'active');
    tabPane.id = `v-pills-${projectName}`;
    tabPane.setAttribute('role', 'tabpanel');
    tabPane.setAttribute('aria-labelledby', `v-pills-${projectName}-tab`);
    tabPane.setAttribute('tabindex', '0');

    const heading = document.createElement('h1');
    heading.style.paddingLeft = '10px';
    heading.textContent = 'Inbox';

    const tasksList = document.createElement('div');
    tasksList.id = 'tasks-list';

    const addButton = document.createElement('button');
    addButton.classList.add('nav-link', 'd-flex', 'list-tabs', 'btn-brand', 'task-creator');
    addButton.id = 'task-add';
    addButton.type = 'button';

    const icon = document.createElement('i');
    icon.classList.add('ri-add-box-fill');

    const text = document.createElement('p');
    text.textContent = 'Add Task';

    addButton.appendChild(icon);
    addButton.appendChild(text);

    tasksList.appendChild(addButton);

    tabPane.appendChild(heading);
    tabPane.appendChild(tasksList);

    return tabPane;
  }
  else {
    const tabPane = document.createElement('div');
    tabPane.classList.add('tab-pane', 'fade');
    tabPane.id = `v-pills-${projectName}`;
    tabPane.setAttribute('role', 'tabpanel');
    tabPane.setAttribute('aria-labelledby', `v-pills-${projectName}-tab`);
    tabPane.setAttribute('tabindex', '0');

    const heading = document.createElement('h1');
    heading.textContent = 'Today';

    tabPane.appendChild(heading);

    return tabPane;
  }
}
