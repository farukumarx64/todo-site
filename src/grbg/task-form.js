import createTaskButton from "./task-box";
import { makeFormVisible } from "..";
import createProjectSection from "./list-section";
import createSectionButton from "./create-section-button";

class TaskForm {
  constructor() {
    this.form = document.createElement("div");
    this.form.classList.add("add-task-form", "container");

    this.taskName = document.createElement("input");
    this.taskName.className = "task-name";

    this.taskButtons = document.createElement("div");
    this.taskButtons.className = "task-buttons";

    this.addTask = document.createElement("button");
    this.addTask.textContent = "ADD";
    this.addTask.className = "addtask";

    this.closeForm = document.createElement("button");
    this.closeForm.textContent = "CLOSE";
    this.closeForm.className = "closeform";

    this.addTaskFunction = this.addTaskFunction.bind(this);
    this.closeFormFunction = this.closeFormFunction.bind(this);
    this.addProjectFunction = this.addProjectFunction.bind(this);

    this.addTask.addEventListener("click", this.addTaskFunction);
    this.closeForm.addEventListener("click", this.closeFormFunction);
    this.checkBtn = null;
    this.doneBtn = null;
    this.dateBtn = null;
    this.currentSection = null;

    this.createForm();
  }

  createForm() {
    this.form.appendChild(this.taskName);
    this.taskButtons.appendChild(this.addTask);
    this.taskButtons.appendChild(this.closeForm);
    this.form.appendChild(this.taskButtons);
  }

  setCheckBtn(btn) {
    this.checkBtn = btn;
  }

  setDateBtn(btn) {
    this.dateBtn = btn;
  }

  setDoneBtn(btn) {
    this.doneBtn = btn;
  }

  setCurrentSection(btn) {
    this.currentSection = btn;
  }

  get taskValue() {
    return this.taskName.value;
  } 

  addTaskFunction() {
    if (this.taskName.value === "") {
      // Handle empty task name
    } else {
      if (this.currentSection === "project") {
        console.log("niggga");
        this.addProjectFunction();
        this.closeFormFunction();
      } else {
        let tempTask = createTaskButton(this.taskName.value);
        if(this.currentSection === 'task') document.querySelector("#tasks-list").appendChild(tempTask);
        else {
          document.querySelector("#personal-tasks-list").appendChild(tempTask)
          this.form.classList.add('personal-tasks-form')
        };

        document.querySelector(`.${this.taskName.value}`).textContent =
          this.taskName.value.charAt(0).toUpperCase() +
          this.taskName.value.slice(1);

        this.setCheckBtn(
          document.querySelector(`.${this.taskName.value}-check`)
        );

        this.setDateBtn(document.querySelector('.no-date'));
        this.setDoneBtn(document.querySelector('.ri-checkbox-blank-circle-line'))
        console.log("it is working", this.doneBtn);

        this.closeFormFunction();

        this.checkBtn.addEventListener("click", function () {
          document.querySelector("#tasks-list").removeChild(tempTask);
        });

        this.doneBtn.addEventListener("click", function () {
          document.querySelector("#tasks-list").removeChild(tempTask);
        });

        this.dateBtn.addEventListener('click', function () {
          document.querySelector('.no-date').style.display = 'none';  
          document.querySelector('.input-due-date').style.display = 'block';
        })
      }
    }
  }

  closeFormFunction() {
    makeFormVisible();

    if (document.querySelector("#v-pills-inbox").contains(this.form)) {
      document.querySelector("#v-pills-inbox").removeChild(this.form);
      console.log("hi");
    } else if (document.querySelector(".add-project-container").contains(this.form)) {
      document.querySelector(".add-project-container").removeChild(this.form);
    } else {
      document.querySelector('.personal-tasks-form').removeChild(this.form)
    }
  }

  addProjectFunction() {
    let tempTask = createProjectSection(this.taskName.value);
    document.getElementById("v-pills-tabContent").appendChild(tempTask);

    let tempSection = createSectionButton(this.taskName.value)
    //tempSection.style.marginBottom = '20px'
    document.querySelector('#v-pills-tab').insertBefore(tempSection, document.querySelector('.add-project-container'))

    this.setCheckBtn(
      document.querySelector(`.${this.taskName.value}-check`)
    );
    console.log(document.querySelector(`.${this.taskName.value.toLowerCase()}-task-btn`), "it is working 2", this.checkBtn);
      this.checkBtn.addEventListener("click", function () {
      document.getElementById("v-pills-tab").removeChild(tempSection);
      document.getElementById("v-pills-tabContent").removeChild(tempTask);

  });
  document.querySelector(`.${this.taskName.value.toLowerCase()}-task-btn`).addEventListener('click', function () {
    console.log(this.taskName)
    document.querySelector(`.${this.taskName.value.toLowerCase()}-task-btn`).style.position = 'fixed'
    document.querySelector(`.${this.taskName.value.toLowerCase()}-task-btn`).setAttribute('style','display: none !important')
    console.log(document.querySelector(`.${this.taskName.value.toLowerCase()}-task-btn`).style.display, 'dudud')


    this.createForm() 
    this.setCurrentSection('personal')
    this.taskName.value = ''
    this.taskName.style.width = '800px'
    document.querySelector('#v-pills-gym').appendChild(this.form)
}.bind(this));
    
  }
}

export default TaskForm;
