import { format } from 'date-fns'
import createSectionButton from './create-section-button'
import Storage from './storage'
import Project from './project'
import Task from './task'
import createTaskButton from './task-box'
import createForm from './create-form'

export default class UI {

  static loadHomepage() {
    UI.loadProjects()
    UI.initProjectButtons()
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (
          project.name !== 'Inbox' &&
          project.name !== 'Today' &&
          project.name !== 'week'
        ) {
          UI.createProject(project.name)
        }
      })

    UI.initAddProjectButtons()
  }

  static loadTasks(projectName) {
    Storage.getTodoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => UI.createTask(task.name, task.dueDate))

    if (projectName !== 'Today' && projectName !== 'This week') {
      UI.initAddTaskButtons()
    }
  }

  static createProject(name) {
    let tempProject = createSectionButton(name);
    document.querySelector('#v-pills-tab').insertBefore(tempProject, document.querySelector('.add-project-container'));

    UI.initProjectButtons(name);
  }

  static createTask(name) {
    let tempTask = createTaskButton(name)
    document.getElementById("tasks-list").appendChild(tempTask);

    UI.initTaskButtons(name);
  }

  // Event Listeners
  static initProjectButtons(taskName) {
    let checkBtn = document.querySelector(`.${taskName}-check`);

    checkBtn.addEventListener("click", UI.removeTask);
  }

  static initTaskButtons(name) {
    let taskBtn = document.querySelector(`.${name.toLowerCase()}-task-btn`);

    taskBtn.addEventListener('click', UI.createTaskBtn(name));
  }

  static initAddProjectButtons() {
    const addProjectButton = document.getElementById('add-project');
    const addForm = document.querySelector('.addform');
    const taskName = document.querySelector('.task-name');
    const closeForm = document.querySelector('.closeform');

    addProjectButton.addEventListener('click', UI.openProjectForm(document.querySelector('#add-project')));
    addForm.addEventListener('click', UI.addProject);
    closeForm.addEventListener('click', UI.closeProjectForm);
    taskName.addEventListener(
      'keypress',
      UI.handleAddProjectPopupInput
    )
  }

  static removeTask () {
    document.getElementById("v-pills-tab").removeChild(tempSection);
    document.getElementById("v-pills-tabContent").removeChild(tempTask);
  }

  static createTaskBtn (taskName) {
    document.querySelector(`.${taskName.toLowerCase()}-task-btn`).style.position = 'fixed'
    document.querySelector(`.${taskName.toLowerCase()}-task-btn`).setAttribute('style','display: none !important')

    let form = createForm('800px');
    document.querySelector(`#v-pills-${taskName}`).appendChild(form)
  }

  static openProjectForm(button) {

    let form = createForm('100%');

    button.style.position = 'fixed';
    button.setAttribute('style','display: none !important');

    container.appendChild(form);
  }

  static addProject() {
    const addProjectInput = document.querySelector('.task-name'); 

    const projectName = addProjectInput.value;

    if (projectName === '') {
      alert("Project name can't be empty")
      return
    }

    if (Storage.getTodoList().contains(projectName)) {
      addProjectInput.value = ''
      alert('Project names must be different')
      return
    }

    Storage.addProject(new Project(projectName))
    UI.createProject(projectName)
    UI.closeProjectForm()
  }

  static closeProjectForm() {
    UI.makeFormVisible();

    let form = document.querySelector('.add-task-form');

    if (document.querySelector("#v-pills-inbox").contains(form)) {
      document.querySelector("#v-pills-inbox").removeChild(form);
      console.log("hi");
    } else if (document.querySelector(".add-project-container").contains(form)) {
      document.querySelector(".add-project-container").removeChild(form);
    } else {
      document.querySelector('.personal-tasks-form').removeChild(form)
    }
  }

  static makeFormVisible() {
    let addProjectBtn = document.querySelector('#add-project')

    addProjectBtn.style.position = 'static';
    addProjectBtn.setAttribute('style', 'display: flex');

    addTaskBtn.style.position = 'static';
    addTaskBtn.setAttribute('style', 'display: flex');
  }

  static handleAddProjectPopupInput(e) {
    if (e.key === 'Enter') UI.addProject()
  }

  static initAddTaskButtons() {
    const addTaskButton = document.getElementById('task-add');
    const addForm = document.querySelector('.addform');
    const taskName = document.querySelector('.task-name');
    const closeForm = document.querySelector('.closeform');

    addTaskButton.addEventListener('click', UI.openTaskForm());
    addForm.addEventListener('click', UI.addTask);
    closeForm.addEventListener('click', UI.closeTaskForm);
    taskName.addEventListener(
      'keypress',
      UI.handleAddTaskPopupInput
    )
  }

  static openTaskForm(button) {

    let form = createForm('800px');

    button.style.position = 'fixed';
    button.setAttribute('style','display: none !important');

    container.appendChild(form);
  }
}