class BoardController {
    #noteListView = null;
    #noteFormView = null;
    #notesCollection = null;
  
    constructor(container) {
      this.#noteFormView = new NotesFormView({
        onSubmit: this.create,
      });

      container.append(this.#noteFormView.el);
  
      this.#noteListView = new NotesListView({
        onEdit: this.edit,
        onDelete: this.delete,
      });

      container.append(this.#noteListView.el);
  
      this.#notesCollection = new NotesCollection();
      this.#notesCollection
        .fetchList()
        .then(() => this.#noteListView.renderList(this.#notesCollection.list));
    }
  
    create = (description) => {
      this.#notesCollection.create(description).then(() => {
        this.#noteListView.renderList(this.#notesCollection.list);
      });
    };
  
    edit = (id, value) => {
      this.#notesCollection
        .update(id, value)
        .then(() => this.#noteListView.renderList(this.#notesCollection.list));
    };
  
    delete = (id) => {
      this.#notesCollection
        .delete(id)
        .then(() => this.#noteListView.renderList(this.#notesCollection.list));
    };
  }
  