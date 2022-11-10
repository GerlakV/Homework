class TodoController {
    #todoListView = null;
    #todosCollection = null;
    #todoFormView = null;

    constructor(container) {
        this.#todoListView = new TodoListView({
            onToggle: (id) => this.toggle(id),
            onDelete: (id) => this.delete(id),
        });
        container.append(this.#todoListView.el);

        this.#todosCollection = new TodosCollection();
        this.#todosCollection
            .fetchList()
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
        
        this.#todoFormView = new TodoFormView({
            onSave: (todo) => this.save(todo),
        });
        container.append(this.#todoFormView.el);
    }

    toggle(id) {
        this.#todosCollection
            .toggle(id)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }

    delete(id) {
        this.#todosCollection
            .delete(id)
            .then(() =>
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }

    save(todo) {
        this.#todosCollection
            .save(todo)
            .then(() => 
                this.#todoListView.renderList(this.#todosCollection.list)
            );
    }
}
