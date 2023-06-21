let listTab = `
<div class="d-flex align-items-start bg-light bg-gradient tab-section">
    <div class="nav flex-column nav-pills me-3 list-section" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active d-flex list-tabs btn-brand" id="v-pills-inbox-tab" data-bs-toggle="pill" data-bs-target="#v-pills-inbox" type="button" role="tab" aria-controls="v-pills-inbox" aria-selected="true">
        <i class="ri-inbox-fill"></i>
        <p>Inbox</p>
        </button>
        <button class="nav-link d-flex list-tabs btn-brand" id="v-pills-today-tab" data-bs-toggle="pill" data-bs-target="#v-pills-today" type="button" role="tab" aria-controls="v-pills-today" aria-selected="false">
        <i class="ri-calendar-todo-fill"></i>
        <p>Today</p>
        </button>
        <button class="nav-link d-flex list-tabs btn-brand" id="v-pills-week-tab" data-bs-toggle="pill" data-bs-target="#v-pills-week" type="button" role="tab" aria-controls="v-pills-week" aria-selected="false">
        <i class="ri-calendar-fill"></i>
        <p>This week</p>
        </button>

        <p class="projects-header">Projects</p>
        <div class="container add-project-container">
            <button class="nav-link d-flex list-tabs btn-brand" id="add-project" type="button">
            <i class="ri-add-box-fill"></i>
            <p>Add Project</p>
            </button>
        </div>
    </div>
    
</div>`;

let listSection = `<div class="tab-content" id="v-pills-tabContent">
<div class="tab-pane fade show active" id="v-pills-inbox" role="tabpanel" aria-labelledby="v-pills-inbox-tab" tabindex="0">
    <h1 style="padding-left: 10px;">Inbox</h1>
    <div id="tasks-list">
        <button class="nav-link d-flex list-tabs btn-brand" id="task-add" type="button">
            <i class="ri-add-box-fill"></i>
            <p>Add Task</p>
        </button>
    </div>
</div>
<div class="tab-pane fade" id="v-pills-today" role="tabpanel" aria-labelledby="v-pills-today-tab" tabindex="0">    
    <h1>Today</h1>
</div>
<div class="tab-pane fade" id="v-pills-week" role="tabpanel" aria-labelledby="v-pills-week-tab" tabindex="0">
    <h1>This week</h1>
</div>
</div>`;
export  {listTab, listSection};