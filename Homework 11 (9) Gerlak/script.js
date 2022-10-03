const EDIT_BTN_CLASS = 'edit-btn';
const DELETE_BTN_CLASS = 'delete-btn';
const INVALID_INPUT_CLASS = 'invalid-input';
const CONTACT_ITEM_SELECTOR = '.list-item';

const toDoListEl = document.querySelector('#toDoList');
const listForm = document.querySelector('#listForm');
const idInput = document.querySelector('#id');
const listInput = document.querySelector('#list');
const listTemplate = document.querySelector('#listTemplate').innerHTML;



let toDoList = [
    { id: 1, list: 'list 1'},
    { id: 2, list: 'list 2'},
    { id: 3, list: 'list 3'},
];

listForm.addEventListener('submit', onFormSubmit);
toDoListEl.addEventListener('click', onListElClick);
listInput.addEventListener('input', onFormElementInput);


init();

function init() {
    renderList(toDoList);
}

function onFormSubmit(e) {
    e.preventDefault();

    const listData = getFormValues();

    if (!validateInput(listInput)) {
        return;
    }

    saveList (listData);
    resetFormData();
}

function onListElClick(e) {
    const listId = getListId(e.target);

    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteList(listId);
    }

    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        editList(listId);
    }

    if (e.target.parentNode.classList.contains('list-item')) {
        e.target.parentNode.classList.toggle('ready');
    }
}

function onFormElementInput(e) {
    validateInput(e.target);
    
}

function renderList(list) {  
    toDoListEl.innerHTML = list.map(generateListHtml).join('');    
}

function generateListHtml({ id, list }) {

    return listTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{list}}', list);  
}

function getFormValues() {
    return {
        id: +idInput.value,
        list: listInput.value,
    };
}

function fillFormValues({ id, list }) {
    idInput.value = id;
    listInput.value = list;
}

function resetFormData() {
    idInput.value = '';
    listInput.value = '';
}

function getListId(el) {
    return +el.closest(CONTACT_ITEM_SELECTOR).dataset.listId;
}

function saveList(list) {
    if (list.id === 0) {
        addList(list);
    } else {
        updateList(list);
    }
}

function addList(list) {
    list.id = Date.now();

    toDoList.push(list);
    renderList(toDoList);
}

function updateList(list) {
    toDoList = toDoList.map((item) =>
        item.id === list.id ? list : item
    );

    renderList(toDoList);
}

function deleteList(id) {
    toDoList = toDoList.filter((item) => item.id !== id);
    renderList(toDoList);
}

function editList(id) {
    const tDlist = toDoList.find((item) => item.id === id);
    fillFormValues(tDlist);
}

function validateInput(input) {
    resetValidation(input);
    if (input.value.trim() === '') {
        input.classList.add('invalid-input');
        return false;
    }

    return true;

}

function resetValidation(input) {
    input.classList.remove(INVALID_INPUT_CLASS);
}


