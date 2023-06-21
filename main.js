/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_list_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/list-section */ \"./src/pages/list-section.js\");\n/* harmony import */ var _pages_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/navbar */ \"./src/pages/navbar.js\");\n/* harmony import */ var _pages_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main-page */ \"./src/pages/main-page.js\");\n\n\n\n\n// Navbar\ndocument.body.appendChild(_pages_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n// Body\nlet main = document.createElement('div')\nmain.className = 'main'\ndocument.body.appendChild(main)\n\n// Tab\nmain.insertAdjacentHTML('beforeend',_pages_list_section__WEBPACK_IMPORTED_MODULE_0__.listTab)\nmain.insertAdjacentHTML('beforeend', _pages_list_section__WEBPACK_IMPORTED_MODULE_0__.listSection)\nlet addProjectBtn = document.querySelector('#add-project')\nlet addTaskBtn = document.querySelector('#task-add')\nvar removeTask\n\n\n\nlet form = document.createElement('div')\nform.classList.add('add-task-form', 'container')\n\nlet taskName = document.createElement('input')\ntaskName.className = 'task-name'\n\nlet taskButtons = document.createElement('div')\ntaskButtons.className = 'task-buttons'\n\nlet addTask = document.createElement('button')\naddTask.textContent = 'ADD'\naddTask.className = 'addtask'\n\nlet closeForm = document.createElement('button')\ncloseForm.textContent = 'CLOSE'\ncloseForm.className = 'closeform'\n\nlet container = document.querySelector('.add-project-container');\n\n\naddProjectBtn.addEventListener('click', function () {\n    taskName.style.width = '100%';\n    taskName.value = '';\n\n    addProjectBtn.style.position = 'fixed';\n    addProjectBtn.setAttribute('style','display: none !important');\n    createForm();\n\n    container.appendChild(form);\n\n})\n\nfunction createForm() {\n    \n    form.appendChild(taskName);\n    taskButtons.appendChild(addTask);\n    taskButtons.appendChild(closeForm);\n    form.appendChild(taskButtons);\n\n}\n\ncloseForm.addEventListener('click', closeFormFunction);\n\naddTaskBtn.addEventListener('click', function () {\n    addTaskBtn.style.position = 'fixed'\n    addTaskBtn.setAttribute('style','display: none !important')\n    createForm()\n    taskName.value = ''\n    taskName.style.width = '800px'\n    document.querySelector('#v-pills-inbox').appendChild(form)\n});\n\naddTask.addEventListener('click', addTaskFunction);\n\nfunction closeFormFunction() {\n    addProjectBtn.style.position = 'static';\n    addProjectBtn.setAttribute('style','display: flex');\n\n    addTaskBtn.style.position = 'static';\n    addTaskBtn.setAttribute('style','display: flex');\n\n    if (document.querySelector('#v-pills-inbox').contains(form)) document.querySelector('#v-pills-inbox').removeChild(form);\n    else container.removeChild(form);\n\n}\n\nconsole.log('yo')\n\nfunction addTaskFunction() {\n    if (taskName.value === '') {\n        \n    } else {\n        document.querySelector('#tasks-list').insertAdjacentHTML('afterbegin', _pages_main_page__WEBPACK_IMPORTED_MODULE_2__.task);\n        document.querySelector('#task-name').classList.add(taskName.value);\n        document.querySelector('#task-add').classList.add(`${taskName.value}-task`)\n        document.querySelector(`.${taskName.value}`).textContent = taskName.value.charAt(0).toUpperCase() + taskName.value.slice(1);\n        removeTask = document.querySelector(\".check\");\n\n        closeFormFunction();\n        \n    }\n}\nconsole.log('ababa', removeTask)\nif (removeTask != null) {\n    removeTask.addEventListener('click', function () {\n        console.log('it is working', taskName.value)\n        document.querySelector('#tasks-list').removeChild(document.querySelector(`.${taskName.value}-task`))\n    })\n}\n\n//# sourceURL=webpack://todo-site/./src/index.js?");

/***/ }),

/***/ "./src/pages/list-section.js":
/*!***********************************!*\
  !*** ./src/pages/list-section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listSection\": () => (/* binding */ listSection),\n/* harmony export */   \"listTab\": () => (/* binding */ listTab)\n/* harmony export */ });\nlet listTab = `\n<div class=\"d-flex align-items-start bg-light bg-gradient tab-section\">\n    <div class=\"nav flex-column nav-pills me-3 list-section\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n        <button class=\"nav-link active d-flex list-tabs btn-brand\" id=\"v-pills-inbox-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-inbox\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-inbox\" aria-selected=\"true\">\n        <i class=\"ri-inbox-fill\"></i>\n        <p>Inbox</p>\n        </button>\n        <button class=\"nav-link d-flex list-tabs btn-brand\" id=\"v-pills-today-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-today\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-today\" aria-selected=\"false\">\n        <i class=\"ri-calendar-todo-fill\"></i>\n        <p>Today</p>\n        </button>\n        <button class=\"nav-link d-flex list-tabs btn-brand\" id=\"v-pills-week-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-week\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-week\" aria-selected=\"false\">\n        <i class=\"ri-calendar-fill\"></i>\n        <p>This week</p>\n        </button>\n\n        <p class=\"projects-header\">Projects</p>\n        <div class=\"container add-project-container\">\n            <button class=\"nav-link d-flex list-tabs btn-brand\" id=\"add-project\" type=\"button\">\n            <i class=\"ri-add-box-fill\"></i>\n            <p>Add Project</p>\n            </button>\n        </div>\n    </div>\n    \n</div>`;\n\nlet listSection = `<div class=\"tab-content\" id=\"v-pills-tabContent\">\n<div class=\"tab-pane fade show active\" id=\"v-pills-inbox\" role=\"tabpanel\" aria-labelledby=\"v-pills-inbox-tab\" tabindex=\"0\">\n    <h1 style=\"padding-left: 10px;\">Inbox</h1>\n    <div id=\"tasks-list\">\n        <button class=\"nav-link d-flex list-tabs btn-brand\" id=\"task-add\" type=\"button\">\n            <i class=\"ri-add-box-fill\"></i>\n            <p>Add Task</p>\n        </button>\n    </div>\n</div>\n<div class=\"tab-pane fade\" id=\"v-pills-today\" role=\"tabpanel\" aria-labelledby=\"v-pills-today-tab\" tabindex=\"0\">    \n    <h1>Today</h1>\n</div>\n<div class=\"tab-pane fade\" id=\"v-pills-week\" role=\"tabpanel\" aria-labelledby=\"v-pills-week-tab\" tabindex=\"0\">\n    <h1>This week</h1>\n</div>\n</div>`;\n\n\n//# sourceURL=webpack://todo-site/./src/pages/list-section.js?");

/***/ }),

/***/ "./src/pages/main-page.js":
/*!********************************!*\
  !*** ./src/pages/main-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"task\": () => (/* binding */ task)\n/* harmony export */ });\nlet task = `\n<button class=\"nav-link d-flex list-tabs btn-brand tasks\" id=\"task-add\" type=\"button\">\n    <div>\n        <i class=\"ri-checkbox-blank-circle-line\" ></i>\n        <p id=\"task-name\"></p>\n    </div>\n    <div>\n        <p>NO DATE</p>\n        <i class=\"ri-close-line check\" ></i>\n    </div>\n</button>`;\n\n\n\n//# sourceURL=webpack://todo-site/./src/pages/main-page.js?");

/***/ }),

/***/ "./src/pages/navbar.js":
/*!*****************************!*\
  !*** ./src/pages/navbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst nav = document.createElement('nav');\nnav.classList.add('navbar', 'bg-body');\n\nconst container = document.createElement('div');\ncontainer.classList.add('container-fluid');\nnav.appendChild(container);\n\nconst link = document.createElement('a');\nlink.classList.add('navbar-brand');\nlink.setAttribute('href', '#');\ncontainer.appendChild(link);\n\nconst img = document.createElement('img');\nimg.setAttribute('src', './images/todo-logo.svg');\nimg.setAttribute('alt', 'Logo');\nimg.setAttribute('width', '30');\nimg.setAttribute('height', '24');\nimg.classList.add('d-inline-block', 'align-text-top');\nlink.appendChild(img);\n\nconst text = document.createElement('p');\ntext.textContent = 'Todo App'\ntext.className = 'logo-text';\ncontainer.appendChild(text);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n//# sourceURL=webpack://todo-site/./src/pages/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;