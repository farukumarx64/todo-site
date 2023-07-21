import { format } from 'date-fns'
import Storage from './storage'
import Project from './project'
import Task from './task'
import createSectionButton from './functions/create-section-button'
import createProjectSection from './functions/create-section'
import createTaskButton from './functions/task-box'

export default class UI {

  static loadHomepage() {
    UI.loadProjects();
    UI.initProjectForm();
    UI.initTaskForm();

  }

  static loadProjects() {
    UI.hideForm();
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (
          project.name !== 'Inbox' &&
          project.name !== 'Today' &&
          project.name !== 'This week'
        ) {
          UI.createProject(project.name)
          UI.loadTasks(project.name)
        }
        else {
          UI.loadTasks(project.name)
        }
      })

      UI.initProjectForm();
      UI.initProjectButtons(); 
      UI.initTaskButtons();
  }

  static loadTasks(projectName) {
    console.log(projectName, 'hello');
    Storage.getTodoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => UI.createTask(task.name, task.dueDate, projectName));
  }

  static hideForm() {
    const projectForm = document.querySelector('.add-project-form');
    const taskForm = document.querySelector('.add-task-form');
    projectForm.classList.remove('active');
    taskForm.classList.remove('active');

  }
  // Create project & task
  static createProject(name) {
    const userProjects = document.getElementById('projects-list');
    userProjects.appendChild(createSectionButton(name))

    UI.createSection(name);
    UI.initProjectForm();
    UI.initProjectButtons();  
  }

  static createSection(name) {
    const tabContent = document.getElementById('v-pills-tabContent');
    tabContent.appendChild(createProjectSection(name));
  }

  static createTask(name, dueDate, projectName) {
    if (projectName === 'This week') projectName = 'week'
      const tasksList = document.getElementById(`v-pills-${projectName.toLowerCase()}`).children[1];
      console.log(name, dueDate, projectName);
      tasksList.appendChild(createTaskButton(name, dueDate));

    UI.initTaskForm();
  }

  static createTaskByInput(name, dueDate, button) {
    console.log(button, button.className);
    if(button.className === 'add-form-task-btn') {
      const tasksList = button.parentNode.parentNode.parentNode.children[1];
      console.log(tasksList);
      tasksList.appendChild(createTaskButton(name, dueDate));
      UI.initTaskForm();
      return
    }
    if(button !== undefined) {
      const tasksList = button.parentNode.parentNode.children[1];
      console.log(tasksList);
      tasksList.appendChild(createTaskButton(name, dueDate));
    }
    else {
      const tasksList = document.getElementById('tasks-list');
      tasksList.innerHTML = '';
      tasksList.appendChild(createTaskButton(name, dueDate));
    }

    UI.initTaskForm();
  }




  // Event listeners
  static initProjectForm() {
    const taskName = document.querySelector('.project-name');
    const addFormBtn = document.querySelector ('.add-form-project-btn');
    const closeFormBtn = document.querySelector('.close-form-project-btn');
    const projectButtons = document.querySelectorAll('.projects-button')

    addFormBtn.addEventListener('click', UI.addProject);
    closeFormBtn.addEventListener('click', UI.closeProjectForm);
    taskName.addEventListener('keypress', UI.AddProjectByInput);
    projectButtons.forEach((projectButton) => projectButton.addEventListener('click', UI.handleProjectButton));
  }

  static initProjectButtons() {
    const addProjectBtn = document.getElementById('add-project');

    addProjectBtn.addEventListener('click', UI.openProjectForm);
  }

  static initTaskForm() {
    const taskNames = document.querySelectorAll('.task-name');
    const addFormButtons = document.querySelectorAll ('.add-form-task-btn');
    const closeFormButtons = document.querySelectorAll('.close-form-task-btn');
    const taskButtons = document.querySelectorAll('.tasks')
    const taskDueDates = document.querySelectorAll('.input-due-date');

    addFormButtons.forEach((addFormBtn) => addFormBtn.addEventListener('click', UI.addTask));
    closeFormButtons.forEach((closeFormBtn) => closeFormBtn.addEventListener('click', UI.closeTaskForm));
    taskNames.forEach((taskName) => taskName.addEventListener('keypress', UI.AddTaskByInput));
    taskButtons.forEach((taskButton) => taskButton.addEventListener('click', UI.handleTaskButton));
    taskDueDates.forEach((taskDueDate) => taskDueDate.addEventListener('change', UI.setDueDate));
  }

  static initTaskButtons() {
    const addTaskButtons = document.querySelectorAll('#task-add');
    addTaskButtons.forEach((addTaskBtn) => addTaskBtn.addEventListener('click', UI.handleAddTask));
  }

  // Event handlers
  static handleAddTask() {
    UI.openTaskForm(this);
    UI.initTaskForm();

  }

  static handleProjectButton(e) {
    const projectName = this.children[0].children[1].textContent;
    console.log(projectName);

    if (e.target.classList.contains('check')) {
      UI.deleteProject(projectName.toLowerCase())
      return;
    }

    UI.openProject(projectName);
  }

  static handleTaskButton(e) {
    const projectName = this.children[0].children[1].textContent;
    if (e.target.classList.contains('check')) {
      console.log(e.target, 'haba', this);
      UI.deleteTask(projectName.toLowerCase(), e.target)
      return;
    }

    if (e.target.classList.contains('no-date')) {
      UI.showDatepicker(e.target);
      return;
    }

  }

  static addProject() {
    const taskInput = document.querySelector('.project-name');
    const tempTaskName = taskInput.value.toLowerCase();
    const taskName = tempTaskName.charAt(0).toUpperCase() + tempTaskName.slice(1);

    if (taskName === '') {
      alert('Please enter a project name');
      return;
    }

    if (Storage.getTodoList().contains(taskName)) {
      taskInput.value = '';
      alert('Project already exists');
      return;
    }

    Storage.addProject(new Project(taskName));
    UI.createProject(taskName);
    UI.initTaskButtons();
    UI.closeProjectForm();
  }

  static addTask() {
    const projectName = this.parentNode.parentNode.parentNode.children[0].textContent;
    const taskInput = this.parentNode.parentNode.children[0];
    console.log(projectName)
    const taskName = taskInput.value;

    if (taskName === '') {
      alert('Please enter a task name');
      return;
    }

    if (Storage.getTodoList().getProject(projectName).contains(taskName)) {
      taskInput.value = '';
      alert('Task already exists');
      return;
    }

    Storage.addTask(projectName, new Task(taskName));
    UI.createTaskByInput(taskName, 'No date', this);
    UI.closeTaskForm(this);
  }

  static addTaskByInputBtn(button) {
    const projectName = button.parentNode.parentNode.children[0].textContent;
    const taskInput = button;
    const taskName = taskInput.value;

    if (taskName === '') {
      alert('Please enter a task name');
      return;
    }

    if (Storage.getTodoList().getProject(projectName).contains(taskName)) {
      taskInput.value = '';
      alert('Task already exists');
      return;
    }

    Storage.addTask(projectName, new Task(taskName));
    UI.createTaskByInput(taskName, 'No date', button);
    UI.closeTaskForm(this);
  }

  static closeProjectForm() {
    const form = document.querySelector('.add-project-form');
    form.classList.remove('active');
  }

  static closeTaskForm(button) {

    const forms = document.querySelectorAll('.add-task-form');
    forms.forEach((form) => form.classList.remove('active'));
  }

  static openProjectForm() {
    UI.closeTaskForm();
    const form = document.querySelector('.add-project-form');
    const formInput = document.querySelector('.project-name');

    form.classList.add('active');

    formInput.value = '';
  }

  static openTaskForm(button) {
    UI.closeProjectForm();

    const form = button.parentNode.parentNode.children[button.parentNode.parentNode.children.length - 1];
    const formInput = form.children[0];

    form.classList.add('active');

    formInput.value = '';
  }
  static AddProjectByInput(e) {
    if (e.key === 'Enter') UI.addProject()
  }

  static AddTaskByInput(e) {
    if (e.key === 'Enter') {
      if (e.target.classList.contains('task-name')) UI.addTaskByInputBtn(e.target);
    }
  }

  static deleteProject(projectName) {
    const button = document.getElementById(`v-pills-${projectName}-tab`);
    Storage.deleteProject(projectName);
    UI.clearProject(button);
    
  }

  static deleteTask(taskButton, targetButton) {
    let projectName
  
    const button = targetButton.parentNode.parentNode;
    if (taskButton.includes('(')) {
      projectName = taskButton.split('(')[1].split(')')[0];
      projectName = projectName.charAt(0).toUpperCase() + projectName.slice(1);
      taskButton = taskButton.split('-(')[0].toLowerCase();
    } else {
      projectName = button.parentNode.parentNode.children[0].textContent;

    }
    console.log(button, projectName, taskButton);

    Storage.deleteTask(projectName, taskButton);
    UI.clearTask(button, projectName);
  }

  static clearProject(project) {
    const projectsList = document.getElementById('projects-list');
    const projectSection = document.getElementById('v-pills-tabContent');
    projectsList.removeChild(project);
    projectSection.removeChild(document.getElementById(project.id.replace('-tab', '')));
  }

  static clearTask(task, projectName) {
    const tasksList = task.parentNode;
    tasksList.removeChild(task);
    UI.updateTodayTasks();
    UI.updateWeekTasks();
    UI.loadTasks(projectName);
  }

  static openProject(projectName) {
    if (projectName === 'Today' || projectName === 'This week' || projectName === 'Inbox') {
      console.log('bro')
      UI.loadTasks(projectName);

    } else {
      console.log('sis')
    }
  }

  static updateTodayTasks() {
    console.log('nya')
    Storage.updateTodayProject();
    const todaySection = document.getElementById('v-pills-today');
    todaySection.innerHTML = `<h1>Today</h1>
        <div id="tasks-list"></div>`;
    UI.loadTasks('Today');

  }

  static updateWeekTasks() {
    console.log('nyu')
    Storage.updateWeekProject();
    const todaySection = document.getElementById('v-pills-week');
    todaySection.innerHTML = `<h1>This week</h1>
        <div id="tasks-list"></div>`;
    UI.loadTasks('This week');
  }

  static showDatepicker(button) {
    const datepicker = button.parentNode.children[1];
    datepicker.classList.add('active');
    button.style.display = 'none';
    console.log(button.parentNode.children[1]);
  }

  static setDueDate() {
    console.log(this.parentNode.parentNode, this.parentNode.parentNode.children[0].textContent);
    const taskButton = this.parentNode.parentNode;
    const projectName = this.parentNode.parentNode.parentNode.parentNode.children[0].textContent;
    const taskName = taskButton.children[0].textContent.toLowerCase();
    const newDueDate = format(new Date(this.value), 'dd/MM/yyyy');
    const date = new Date();
    const day = newDueDate.split('/')[0];
    const month = newDueDate.split('/')[1];
    const year = newDueDate.split('/')[2];
    console.log(day, month, year, date.getDate(), date.getMonth(), date.getFullYear());
    console.log(projectName, taskName, newDueDate);

    if (projectName === 'Today' || projectName === 'This week') {
      const mainProjectName = taskName.split('(')[1].split(')')[0]
      const mainTaskName = taskName.split(' (')[0]
      Storage.setTaskDate(projectName, taskName, newDueDate)
      Storage.setTaskDate(mainProjectName, mainTaskName, newDueDate)
      if (projectName === 'Today') {
        Storage.updateTodayProject()
      } else {
        Storage.updateWeekProject()
      }
    } else {
      Storage.setTaskDate(projectName, taskName, newDueDate);
    }
    UI.updateTodayTasks();
    UI.updateWeekTasks();
    UI.closeSetDueDate(taskButton, newDueDate);
  }

  static closeSetDueDate(taskButton, newDueDate) {
    const dueDate = taskButton.children[1].children[0]
    dueDate.textContent = newDueDate;
    const dueDateInput = taskButton.children[1].children[1]

    dueDateInput.classList.remove('active');
    dueDate.style.display = 'block';

    console.log(dueDate, dueDateInput);

  }
}