export default function createForm(width) {
  let form = document.createElement("div");
  form.classList.add("add-task-form", "container");

  let taskName = document.createElement("input");
  taskName.style.width = width;
  taskName.className = "task-name";

  let taskButtons = document.createElement("div");
  taskButtons.className = "task-buttons";

  let addTask = document.createElement("button");
  addTask.textContent = "ADD";
  addTask.className = "addform";

  let closeForm = document.createElement("button");
  closeForm.textContent = "CLOSE";
  closeForm.className = "closeform";

  form.appendChild(this.taskName);
  taskButtons.appendChild(this.addTask);
  taskButtons.appendChild(this.closeForm);
  form.appendChild(this.taskButtons);

  return form;
}