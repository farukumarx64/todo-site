import {listTab, listSection} from "./pages/list-section";
import nav from "./pages/navbar";
import { task } from "./pages/main-page";

// Navbar
document.body.appendChild(nav)

// Body
let main = document.createElement('div')
main.className = 'main'
document.body.appendChild(main)

// Tab
main.insertAdjacentHTML('beforeend',listTab)
main.insertAdjacentHTML('beforeend', listSection)
let addProjectBtn = document.querySelector('#add-project')
let addTaskBtn = document.querySelector('#task-add')
var removeTask



let form = document.createElement('div')
form.classList.add('add-task-form', 'container')

let taskName = document.createElement('input')
taskName.className = 'task-name'

let taskButtons = document.createElement('div')
taskButtons.className = 'task-buttons'

let addTask = document.createElement('button')
addTask.textContent = 'ADD'
addTask.className = 'addtask'

let closeForm = document.createElement('button')
closeForm.textContent = 'CLOSE'
closeForm.className = 'closeform'

let container = document.querySelector('.add-project-container');


addProjectBtn.addEventListener('click', function () {
    taskName.style.width = '100%';
    taskName.value = '';

    addProjectBtn.style.position = 'fixed';
    addProjectBtn.setAttribute('style','display: none !important');
    createForm();

    container.appendChild(form);

})

function createForm() {
    
    form.appendChild(taskName);
    taskButtons.appendChild(addTask);
    taskButtons.appendChild(closeForm);
    form.appendChild(taskButtons);

}

closeForm.addEventListener('click', closeFormFunction);

addTaskBtn.addEventListener('click', function () {
    addTaskBtn.style.position = 'fixed'
    addTaskBtn.setAttribute('style','display: none !important')
    createForm()
    taskName.value = ''
    taskName.style.width = '800px'
    document.querySelector('#v-pills-inbox').appendChild(form)
});

addTask.addEventListener('click', addTaskFunction);

function closeFormFunction() {
    addProjectBtn.style.position = 'static';
    addProjectBtn.setAttribute('style','display: flex');

    addTaskBtn.style.position = 'static';
    addTaskBtn.setAttribute('style','display: flex');

    if (document.querySelector('#v-pills-inbox').contains(form)) document.querySelector('#v-pills-inbox').removeChild(form);
    else container.removeChild(form);

}

console.log('yo')

function addTaskFunction() {
    if (taskName.value === '') {
        
    } else {
        document.querySelector('#tasks-list').insertAdjacentHTML('afterbegin', task);
        document.querySelector('#task-name').classList.add(taskName.value);
        document.querySelector('#task-add').classList.add(`${taskName.value}-task`)
        document.querySelector(`.${taskName.value}`).textContent = taskName.value.charAt(0).toUpperCase() + taskName.value.slice(1);
        removeTask = document.querySelector(".check");

        closeFormFunction();
        
    }
}
console.log('ababa', removeTask)
if (removeTask != null) {
    removeTask.addEventListener('click', function () {
        console.log('it is working', taskName.value)
        document.querySelector('#tasks-list').removeChild(document.querySelector(`.${taskName.value}-task`))
    })
}