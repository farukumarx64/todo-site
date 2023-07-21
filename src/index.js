import UI from "./modules/todo-ui";

function makeFormVisible() {
    addProjectBtn.style.position = 'static';
    addProjectBtn.setAttribute('style', 'display: flex');

    addTaskBtn.style.position = 'static';
    addTaskBtn.setAttribute('style', 'display: flex');
}

document.addEventListener('DOMContentLoaded', UI.loadHomepage)

export {makeFormVisible}

/* .innerHTML += `
      <button class="nav-link d-flex list-tabs btn-brand projects-button" id="v-pills-${name.toLowerCase()}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${name.toLowerCase()}" type="button" role="tab" aria-controls="v-pills-${name.toLowerCase()}" aria-selected="false" tabindex="-1">
        <div>
            <i class="ri-list-check-3"></i>
            <p>${name.charAt(0).toUpperCase() +
              name.slice(1)}</p>
        </div>
        <i class="ri-close-line check"></i>
      </button>`; */