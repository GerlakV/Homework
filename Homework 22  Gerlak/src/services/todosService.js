const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';

export function getTodosList() {
    return fetch(API_URL).then((res) => res.json());
}

export function removeTodo(id) {
    return fetch(API_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function updateTodo(todo) {
    return fetch(API_URL + todo.id, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function addTodo(todo) {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}