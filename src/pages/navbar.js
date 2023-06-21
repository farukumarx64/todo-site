
const nav = document.createElement('nav');
nav.classList.add('navbar', 'bg-body');

const container = document.createElement('div');
container.classList.add('container-fluid');
nav.appendChild(container);

const link = document.createElement('a');
link.classList.add('navbar-brand');
link.setAttribute('href', '#');
container.appendChild(link);

const img = document.createElement('img');
img.setAttribute('src', './images/todo-logo.svg');
img.setAttribute('alt', 'Logo');
img.setAttribute('width', '30');
img.setAttribute('height', '24');
img.classList.add('d-inline-block', 'align-text-top');
link.appendChild(img);

const text = document.createElement('p');
text.textContent = 'Todo App'
text.className = 'logo-text';
container.appendChild(text);

export default nav;