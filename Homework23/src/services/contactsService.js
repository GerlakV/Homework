const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export function fetchContactsList() {
  return fetch(API_URL).then((resp) => (resp.ok ? resp.json() : []));
}

export function removeTodo(id) {
  return fetch(API_URL + id, {
    method: 'DELETE',
  }).then((res) => res.json());
}

export function insertContact(contact) {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => {
    return validate(resp);
  });
}

export function updateContact(contactUpd) {
  return fetch(API_URL + contactUpd.id, {
    method: 'PUT',
    body: JSON.stringify(contactUpd),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => {
    return validate(resp);
  });
}

export function deleteContact(id) {
  return fetch(API_URL + id, {
    method: 'DELETE',
  }).then((resp) => {
    return validate(resp);
  });
}

function validate(resp) {
  if (!resp.ok) {
    throw new Error('Status Code ' + resp.status);
  }
  return resp.json();
}
