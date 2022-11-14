class NotesCollection {
  #api = null;
  list = [];

  constructor() {
    this.#api = new RestApi(
      'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/'
    );
  }

  fetchList() {
    return this.#api.getList().then((data) => (this.list = data));
  }

  getItem(id) {
    return this.list.find((item) => item.id === id);
  }

  create(value) {
    return this.#api
      .create({ description: value })
      .then((newItem) => (this.list = [...this.list, newItem]));
  }

  update(id, value) {
    const item = this.list.find((item) => item.id === id);
    const updatedItem = { ...item, description: value };

    return this.#api.update(updatedItem).then(() => {
      this.list = this.list.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
    });
  }

  delete(id) {
    return this.#api.delete(id).then(() => {
      this.list = this.list.filter((item) => item.id !== id);
    });
  }
}
