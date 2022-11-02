const TODO_ITEM_CLASS = 'todo-item';
const TODO_ITEM_SELECTOR = '.' + TODO_ITEM_CLASS;
const DONE_ITEM_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const INVALID_CLASS = 'invalid-input';
const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const listEl = document.querySelector('#list');
const newTodoTitleInput = document.querySelector('#newTodoTitle');
const saveTodoBtn = document.querySelector('#saveTodoBtn');
const newTodoForm = document.querySelector('#newTodoForm');

let todoList = [];

const validation = {
    isValid: false,
    errors: {
        title: 'Field is Required',
    },
    touched: {
        title: false,
    },
};

newTodoForm.addEventListener('submit', onNewTodoFormSubmit);
newTodoForm.addEventListener('input', onFormInput);
newTodoForm.addEventListener('focusin', onFormFocus);
listEl.addEventListener('click', onListElClick);

init();

function init() {
    fetchContacts();
    renderList(todoList);
}

function fetchContacts() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => {
        resp.json().then((data) => {
            todoList = data;
            renderList(todoList);
        });
    });
}

function onNewTodoFormSubmit(e) {
    e.preventDefault();

    if (!validation.isValid) {
        return;
    }

    const newTodo = getFormValues();
    addTodo(newTodo);
}

function onListElClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const todoId = getTodoId(e.target);
        deleteTodo(todoId);
    }
    if (e.target.classList.contains(TODO_ITEM_CLASS)) {
        const todoId = getTodoId(e.target);
        toggleTodo(todoId);
    }
}

function onFormInput(e) {
    validateInput(e.target);
}

function onFormFocus(e) {
    touchInput(e.target);
}

function renderList(list) {
    listEl.innerHTML = list.map(generateTodoItemHtml).join('');
}

function generateTodoItemHtml({ id, title, completed }) {
    return todoTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{title}}', title)
        .replaceAll('{{doneClass}}', completed ? DONE_ITEM_CLASS : '');
}

function getFormValues() {
    return {
        title: newTodoTitleInput.value,
    };
}

function addTodo(todo) {
    todo.id = Date.now();
    todo.completed = false;
    todoList = [...todoList, todo];

    renderList(todoList);
}

function deleteTodo(id) {
    todoList = todoList.filter((item) => item.id !== id);

    renderList(todoList);
}

function toggleTodo(id) {
    todoList = todoList.map((item) =>
        item.id !== id ? item : { ...item, completed: !item.completed }
    );

    renderList(todoList);
}

function getTodoId(el) {
    return +el.closest(TODO_ITEM_SELECTOR).dataset.todoId;
}

function validateInput(el) {
    let error = null;
    const { name, value } = el;

    resetValidation(el);

    if (value === '') {
        error = 'Field is Required';
    }
    if (value.length < 3) {
        error = 'Field is too short';
    }

    validation.errors[name] = error;
    validation.isValid = !validation.errors.title;

    if (error !== null) {
        el.classList.add(INVALID_CLASS);
    }
}

function resetValidation(el) {
    el.classList.remove(INVALID_CLASS);
}

function touchInput(el) {
    validation.touched[el.name] = true;
}
