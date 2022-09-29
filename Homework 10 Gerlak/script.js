const addСontactBtn = document.querySelector('#addСontactBtn');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const phoneInput = document.querySelector('#phone');
const contactList = document.querySelector('#contactList');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const DELETE_BTN_CLASS = 'delete-btn';


addСontactBtn.addEventListener('click', onAddListBtnClick); 
contactList.addEventListener('click', onListClick);

function onAddListBtnClick() {
    if (!validateForm()) {
        return;
    }

    const newСontact = getValues();
    addContact(newСontact);
    resetForm();
}

function validateForm() {
    resetValidation();

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('invalid-input');
        return false;
    }

    if (surnameInput.value.trim() === '') {
        surnameInput.classList.add('invalid-input');
        return false;
    }

    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('invalid-input');
        return false;
    }

    return true;
}

function resetValidation() {
    nameInput.classList.remove('invalid-input');
    surnameInput.classList.remove('invalid-input');
    phoneInput.classList.remove('invalid-input');
}

function getValues() {
    return {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    };
}


function addContact(contact) {
    const contactHtml =  generateContactHtml(contact);
    contactList.insertAdjacentHTML('beforeend', contactHtml);
}

function resetForm() {
    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
}

function generateContactHtml({ name, surname, phone }) {
    return contactTemplate.replaceAll('{{name}}', name)
                          .replaceAll('{{surname}}', surname)
                          .replaceAll('{{phone}}', phone);
}

function onListClick(event) {
    console.log(event);
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        removeContact(event.target.parentElement);
    }
}

function removeContact(contactEl) {
    contactEl.remove();
}