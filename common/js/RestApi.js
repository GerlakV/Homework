class RestApi {
    #baseUrl = null;
    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }

    getList() {
        return this.#request(this.#baseUrl);
    }

    getOne(id) {
        return this.#request(this.#baseUrl + id);
    }

    create(obj) {
        return this.#request(this.#baseUrl, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    update(obj) {
        return this.#request(this.#baseUrl + obj.id, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    delete(id) {
        return this.#request(this.#baseUrl + id, {
            method: 'DELETE',
        });
    }

    #request(url, options) {
        return fetch(url, options).then((res) => {
            console.log(res);
            if (res.ok) {
                return res.json();
            }

            throw new Error(res);
        });
    }
}

// CRUD;

// CREATE;
// READ(2);
// UPDATE;
// DELETE;
