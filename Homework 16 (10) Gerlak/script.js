const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

const addСontactBtn = document.querySelector('#addСontactBtn');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const idInput = document.querySelector('#idInput');
const contactListEl = document.querySelector('#contactList');
const newContactForm = document.querySelector('#contactForm');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;

const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const INVALID_CLASS = 'invalid-input';
const CONTACT_ITEM_CLASS = 'new-contact';
const CONTACT_ITEM_SELECTOR = '.' + CONTACT_ITEM_CLASS;

let contactList = [];

newContactForm.addEventListener('submit', onNewContactFormSubmit);
newContactForm.addEventListener('input', onNewFormInput);
 
contactListEl.addEventListener('click', onListClick);
addСontactBtn.addEventListener('click', onAddListBtnClick);

init();

function init() {
    fetchContact();
}

function fetchContact() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            contactList = data;
            renderContact(contactList);
        })
}

function renderContact(list) {
    contactListEl.innerHTML = list.map(generateContactHtml).join('');
}

function generateContactHtml({ name, surname, email, id }) {
    return contactTemplate.replaceAll('{{name}}', name)
                          .replaceAll('{{surname}}', surname)
                          .replaceAll('{{email}}', email)
                          .replaceAll(`{{id}}`, id);
}

function onNewContactFormSubmit(e) {
    e.preventDefault();

    const newContact = getFormValues();

    if(nameInput.value === '' || surnameInput.value === '' || emailInput.value === '') {
        return
    }
    saveContact(newContact);

    resetForm();
}

function saveContact(contact) {
    if(!contact.id){
        addContact(contact);
    } else {
        updateContact(contact);
    }
}

function updateContact(contact) {
    fetch(API_URL + contact.id, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(() => {
        contactList = contactList.map((item) => item.id === contact.id ? contact : item);

        renderContact(contactList);
    })
    resetForm();
}

function addContact(contact) {
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => {
        contactList = [...contactList, data];
        renderContact(contactList);
    })

}

function resetForm() {
    nameInput.value = '';
    surnameInput.value = '';
    emailInput.value = ''; 
    idInput.value = ''; 
}


function onNewFormInput(e) {
    validateInput(e.target);
}

function validateInput(input) {
    resetInputValidation(input);
    if(input.value === ''){   
       input.classList.add(INVALID_CLASS);
       addСontactBtn.disabled = true;
        return false;
    }
    addСontactBtn.disabled = false;
    return true;
}

function resetInputValidation(input) {
    input.classList.remove(INVALID_CLASS);
}


function onListClick(e) {
    const contactId = getContactId(e.target);
    if(e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(contactId);
    }
    if(e.target.classList.contains(EDIT_BTN_CLASS)) {
        editContact(contactId);
        deleteContact(contactId);
    }
}

function editContact(id) {
    const contact = contactList.find((item) => item.id === id);
    editFormValues(contact);
    
}

function editFormValues({ name, surname, email, id }) {
    nameInput.value = name;
    surnameInput.value = surname;
    emailInput.value = email;
    idInput.value = id;
    addСontactBtn.innerText = 'Save';
}

function deleteContact(id) {
    fetch(API_URL + id, {
        method: 'DELETE',
    }).then(() => {
        contactList = contactList.filter((item) => item.id !== id);

        renderContact(contactList);
    });
}

function getContactId(el) {
    return el.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
}


function onAddListBtnClick() {
    if (!validateForm()) {
        return;
    }

    const newСontact = getFormValues();
    addContact(newСontact);
    resetForm();
}

function validateForm() {
    resetValidation();

    if (nameInput.value.trim() === '') {
        nameInput.classList.add(INVALID_CLASS);
        return false;
    }

    if (surnameInput.value.trim() === '') {
        surnameInput.classList.add(INVALID_CLASS);
        return false;
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add(INVALID_CLASS);
        return false;
    }

    return true;
}

function resetValidation() {
    nameInput.classList.remove(INVALID_CLASS);
    surnameInput.classList.remove(INVALID_CLASS);
    emailInput.classList.remove(INVALID_CLASS);
}

function getFormValues() {
    return {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        id: idInput.value
    }
}

function removeContact(contactEl) {
    contactEl.remove();
}