const addListBtn = document.querySelector('#addList');
const listElInput = document.querySelector('#listElement');
const toDoListEl = document.querySelector('#toDoList');


addListBtn.addEventListener('click', onAddListBtnClick); 

function onAddListBtnClick() {
    if (!validateForm()) {
        resetForm();
        return;
    }

    const newList = getValues();
    addListItem(newList);
    resetForm();
}

function validateForm() {
    resetValidation();

    if (listElInput.value.trim() === '') {
        listElInput.classList.add('invalid-input');
        return false;
    }

    return true;
}

function resetValidation() {
    listElInput.classList.remove('invalid-input');
}

function getValues() {
    const list= listElInput.value;
    return list;
}

function addListItem(listItem) {
    const listEl = generateListElement(listItem);

    toDoListEl.append(listEl);
}

function generateListElement(listElement) {
    const liEl = document.createElement('li');
    liEl.textContent = listElement;

    liEl.addEventListener ('click', () => {
        liEl.classList.toggle('ready');
    })

    return liEl;
}

function resetForm() {
    listElInput.value = '';
}